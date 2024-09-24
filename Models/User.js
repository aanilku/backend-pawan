const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    userName:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    }
});

const UserModel = mongoose.model('users',UserSchema);
module.exports = UserModel;