const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

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
        return res.status(403).json({message:"Token Expired or invalid"})
    }
    
    
}

module.exports = {
    authMiddleware
} 