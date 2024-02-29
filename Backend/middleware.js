const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("./config");

const authMiddleware = function(req, res, next){
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")){
        return res.status(403).json({
            message: "Invalid token"
        })
    }
    const token = authHeader.split(" ")[1];

    try{
        const decoded =  jwt.verify(token, JWT_SECRET);
        req.userId = decoded.userId;
         next();

    }
    catch (err){
        console.log(err)
        return res.status(403).json("Token Expired or invalid")
    }
    
    
}

module.exports = {
    authMiddleware
} 