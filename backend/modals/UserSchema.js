const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    confirmPassword:{
        type:String,
        minlength:6
    },
    gender:{
        type:String,
        required:true,
       enum:["male","female"],
    },
    profilePic:{
        type:String,
        default:"",
    }
});

module.exports = mongoose.model('User', UserSchema);