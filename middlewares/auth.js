const jwt = require('jsonwebtoken');
const auth = (req, res, next) => {
    const {userToken} = req.cookies;

    if(userToken){
        jwt.verify(userToken,process.env.SECRET,(error, token) => {
            if(error){
                return res.status(403).json({message:"Please login to access this page."});
            }else{
                console.log(token);
                next();
            }

        });

    }else{
        return res.status(403).json({message:"Please login to access this page."});
    }

};

module.exports={auth};