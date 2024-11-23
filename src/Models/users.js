const mongoose=require("mongoose");

// const {Schema}=mongoose;

const userSchema= new mongoose.Schema(
    {
        firstName:{
            type:String,
            required:true,
        },
        lastName:{
            type:String,
        },
        emailId:{
            type:String,
            unique:true,
            lowercase:true,
            required:true,
            trim:true,
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
        },
        photoUrl:
        {
            type:String
        },
        about:
        {
            type:String,
            default: "No bio provided",
        },
        skills:
        {
            type:[string],

        }
    },{timestamps:true}
);

const User=mongoose.model("User",userSchema);

module.exports=User;

// module.exports=Mongoose.Model("User",userSchema);