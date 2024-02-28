const mongoonse = require( 'mongoose' );;

mongoonse.connect('mongodb+srv://whaleInSpace:aHX18KLJaNmCnQrf@0x.bxbegwj.mongodb.net/Wallet-App');

const userSchema =  mongoose.Schema({
    userName : {
        type: String,
        required : true,
        unique : true,
        trim: true,
        lowercase: true,
        minlength: 3,
        maxlength: 30
    },
    password : {
        type : String,
        required: true,
        minlength: 8
    },
    firstName: {
        type: String,
        required: true,
        trim : true,
        maxlength: 30
    },
    lastName:{
        type: String,
        required : true,
        trim: true,
        maxlength: 30
    }
});
const User = mongoonse.model("Users", userSchema);

module.exports = {
    User
}

