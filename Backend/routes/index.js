const express = require("express");
const userRouter = require("./user");
const accountRouter = require("./account");
const { authMiddleware } = require("../middleware");
const { default: mongoose } = require("mongoose");
const { User, Account } = require("../bd");



const app = express();
const router = express.Router();

router.post('/me', authMiddleware, async(req,res)=>{

    if (!mongoose.Types.ObjectId.isValid(req.userId)) {
        return res.status(400).json({
            message: "Invalid user Id"
        })
    }
    const user = await User.findOne({
        _id: req.userId
    })
    if (!user) {
        return res.status(400).json({
            Authenticated: false,
            message: "User not found"
        })
    }
    const account = await Account.findOne({
        userId: req.userId
    });

    if (!account) {
        return res.status(400).json({
            Authenticated: false,
            message: "Account not found"
        })
    }
    res.status(200).json({
        Authenticated : true,
        message: "User is Authenticated"
    })

});
router.use('/user', userRouter);
router.use('/account', accountRouter)

module.exports = router;
