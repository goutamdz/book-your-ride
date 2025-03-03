const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            trim:true,
            minLength:[3,"Firstname should be atleast 3 characters long"],
        },
        lastname:{
            type:String,
            minLength:[3,"Lastname should be atleast 3 characters long"],
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        minLength:[6,"Email should be atleast 6 characters long"],
    },
    password:{
        type:String,
        required:true,
        trim:true,
        select:false,
    },
    socketId:{
        type:String,
    },
})

userSchema.methods.generateAuthToken=async ()=>{
    const token=jwt.sign({_id:this._id},process.env.JWT_SECRET);
    return token;
};

userSchema.statics.hashPassword=async (password)=>{
    return await bcrypt.hash(password,10);
}

const userModel=mongoose.model('user',userSchema);

module.exports=userModel;