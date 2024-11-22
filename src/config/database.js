const mongoose=require("mongoose");

const connectDB= async ()=>
{
    await mongoose.connect("mongodb+srv://vardhanmamidi7:W6udm0j7vaO5bplg@learnharekrishna.xq9g3.mongodb.net/DevTinder");
}


module.exports=connectDB;