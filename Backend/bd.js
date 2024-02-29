const mongoose = require( 'mongoose' );
const bcrypt = require('bcrypt');

mongoose.connect('mongodb+srv://whaleInSpace:aHX18KLJaNmCnQrf@0x.bxbegwj.mongodb.net/Wallet-App');

const userSchema =  mongoose.Schema({
    username : {
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
    firstname: {
        type: String,
        required: true,
        trim : true,
        maxlength: 30
    },
    lastname:{
        type: String,
        required : true,
        trim: true,
        maxlength: 30
    }
});

userSchema.methods.createHash = async (plainTextPassword)=>{
    const saltRounds = 10;

    const salt = await bcrypt.genSalt(saltRounds);
    return await bcrypt.hash(plainTextPassword, salt);

}
userSchema.methods.checkPassword = async function (userPassword){
    return await bcrypt.compare(userPassword, this.password);
}
const User = mongoose.model("Users", userSchema);

module.exports = {
    User
}

