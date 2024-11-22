const mongoose=require("mongoose");

// const {Schema}=mongoose;

const userSchema= new mongoose.Schema(
    {
        firstName:{
            type:String,
        },
        lastName:{
            type:String,
        },
        emailId:{
            type:String,
        },
        age:
        {
            type:Number,
        },
        password:
        {
            type:String,
        },
        gender:
        {
            type:String,
        }
    }
);

const User=mongoose.model("User",userSchema);

module.exports=User;

// module.exports=Mongoose.Model("User",userSchema);