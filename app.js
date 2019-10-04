const express = require('express');
const nconf = require("./config/nconf.js")

const db = require('./config/connection');
const app = express();

const userRoute = require('./routes/users');

app.use("/api/user",userRoute);

///create a middlewear called verify token
app.post('/api/posts',verifyToken,(req,res,err)=>{

    jwt.verify(req.token,'secret key',(err,authData)=>{
        if(err){
            res.sendStatus(403);
        }
        else{
            res.json({
                message:'post created',
                authData
            });
        }

    })
    

});

///verify token
function verifyToken(req,res,next){
    ///get header value
    const bearerHeader = req.headers['authorization'];
    ///check if bearerHeader is undefined
    if(typeof bearerHeader !=='undefined'){
        /// to remove space we use split function
        const bearer = bearerHeader.split(' ');
        //// get token from array
        const bearerToken = bearer[1];
        ///set token
        req.token = bearerToken;
        ///call next middle wear
        next();

    }
    else{
        ///it will return forbidden
        res.sendStatus(403)
    }
}

app.listen( nconf.get("port"),()=>{
    console.log('Server started on port 3000');
});