const express = require('express');
const zod = require('zod');
const rootRouter = require('./index.js');
const { User, Account, Transaction } = require('../bd.js');

const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config.js');
const { authMiddleware } = require('../middleware.js');

const userRouter = express.Router();

const signupBodySchema = zod.object({
    username: zod.string().email(),
    password: zod.string().min(8),
    firstName: zod.string().max(150),
    lastName: zod.string().max(150)
})

userRouter.post('/signup', async (req, res) => {
    const { success } = signupBodySchema.safeParse(req.body);
    if (!success) {
        return res.status(411).json({
            message: "Invalid inputs",
            send: req.body
        })
    }
    const existingUser = await User.findOne({ username: req.body.username });

    if (existingUser) {
        return res.status(411).json({
            message: "User Already Exist"
        })
    }
    const user = new User({
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    });
    user.password = await user.createHash(req.body.password);
    const userId = user._id;
    await user.save();
    await Account.create({
        userId: userId,
        balance: 1 + Math.random() * 10000
    })
    const token = jwt.sign({ userId }, JWT_SECRET);

    res.json({
        message: "user created successfully",
        token: token,
    })

})
const signinBodySchema = zod.object({
    username: zod.string().email(),
    password: zod.string()
})
userRouter.post('/signin', async (req, res) => {
    const { success } = await signinBodySchema.safeParse(req.body);
    if (!success) {
        return res.status(411).json({
            message: "Invalid Inputs"
        })
    }

    let user = await User.findOne({ username: req.body.username });
    if (!user) {
        return res.status(411).json({
            message: "Email not found"
        })
    }

    if (await user.checkPassword(req.body.password)) {
        const token = jwt.sign({
            userId: user._id
        }, JWT_SECRET);
        return res.json({
            token
        })
    }
    else {
        return res.status(411).json({
            message: "Wrong Password!"
        })
    }

})

const updateBodySchema = zod.object({
    currentPassword: zod.string().min(8).optional(),
    newPassword: zod.string().min(8).optional(),
    firstName: zod.string().max(150).optional(),
    lastName: zod.string().max(150).optional()
}).refine((data)=>{
    if (data.newPassword && !data.currentPassword){
        return false
    }
    return true
});
userRouter.put('/', authMiddleware, async (req, res) => {
    const { success } = await updateBodySchema.safeParse(req.body);
    if (!success) {
        return res.status(411).json({
            message: "Invalid inputs"
        })
    }
    const user = await User.findOne({ _id: req.userId });
    if (!user) {
        return res.status(403).json({
            message: "User not found"
        })
    }

    if (req.body.password) {
        if (await user.checkPassword(req.body.password)) {
            await User.updateOne({ _id: req.userId }, req.body)
            res.json({
                message: "Updated successfully"
            })
        }
        else {
            res.json({
                message: "Invalid Password"
            })
        }
    }
    else {
        await User.updateOne({ _id: req.userId }, req.body)
        res.json({
            message: "Updated successfully"
        })
    }



})

userRouter.get('/dashboard', authMiddleware, async (req, res) => {
    const user = await User.findById(req.userId);
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
   
    const account = await Account.findOne({ userId: req.userId }).populate({ path: 'transactions', options: { limit: 5 } }).exec();
    const balance = account.balance;
    const transactions = account.transactions;
    res.json({
        firstName : user.firstName,
        lastName : user.lastName,
        balance : balance,
        transactions : transactions
    })

})

userRouter.get('/search', authMiddleware, async (req, res) => {
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [
            { 'firstName': { $regex: filter, '$options': 'i' } },
            { 'lastName': { $regex: filter, '$options': 'i' } }
        ]
    })

    res.json({
        users: users.map((user) => {
            return (user._id != req.userId ? {
                "firstName": user.firstName,
                "lastName": user.lastName,
                "_id": user._id
            } : null)
        })
    })
})




module.exports = userRouter;