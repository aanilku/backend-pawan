const UserModel = require("../Models/User");
const bcrypt = require('bcrypt');

const signup =async (req,res)=>{
    try{
        const {userName,email,password}=req.body;
        const user = await UserModel.findOne({email});
        if(user){
            return res.status(409)
            .json({message:'user is already exist, you can login',success:false});
        }
        const userModel = new UserModel({userName,email,password});
        userModel.password = await bcrypt.hash(password,10);
        res.status(201)
        .json({
            massage:'signuo successfully',
            success: true
        })
    } catch (err){
        res.status(500)
        .json({
            massage:'Internal server error',
            success: false
        })
    }
}

module.exports ={
    signup
}