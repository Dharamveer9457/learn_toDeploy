//authorization middleware
const jwt = require('jsonwebtoken');

function auth(req,res,next){
    const token = req.headers.authorization
    if(token){
        try {
            const decoded = jwt.verify(token.split(" ")[1], 'masai');
            req.body.userID = decoded.userID
            if(decoded){
                next()
            }else{
                res.send({"msg":"Please Login First"})
            }
        } catch (error) {
            console.log(error)
            res.send({"err":error.message})
        }
    }
}

module.exports = {auth}