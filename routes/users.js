const express =  require("express");
const jwt = require('jsonwebtoken');
/////router is required
const router =  express.Router()


///login user
router.post("/login",(req,res,err)=>{
    /// mock user
    const user = {
        id:1,
        name:'brian',
        pass:'wangocho'
    }
    jwt.sign({user:user},'secret key',{ expiresIn:'30s' },(err,token)=>{
        res.json({
            token:token
        })

    });
})

module.exports = router;