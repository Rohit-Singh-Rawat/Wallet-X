const express = require('express');
const zod = require('zod');
const rootRouter = require('./index.js');
const { User } = require('../bd.js');
const { JWT_SECRET } = require('../config.js');

const userRouter = express.Router();

const signupBodySchema = zod.object({
    username: zod.string().email(),
    password: zod.string().min(8),
    firstname: zod.string().max(150),
    lastname: zod.string().max(150)
})

userRouter.post('/signup', async (req, res) => {
    const { success } = signupBodySchema.safeParse(req.body);
    if (!success) {
        return res.status(411).json({
            message: "Invalid inputs"
        })
    }
    const existingUser = await User.findOne({ username: req.body.username });

    if (existingUser) {
        return res.status(411).json({
            message: "User Already Exist"
        })
    }
    const user = await User.Create({
        username: req.body.username,
        firstname: req.body.username,
        lastname: req.body.lastname,
        password: req.body.password
    });

    const userId = user._id;

    const token = jwt.sign({ userId }, JWT_SECRET);

    res.json({
        message: "user created successfully",
        token: token
    })

})

module.exports = userRouter;