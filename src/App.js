const express=require ("express");
const connectDB=require("./config/database.js");
const app=express();
const User=require("./Models/users.js");

app.use(express.json());

app.post("/signup",async(req,res)=>
{
    const user=new User(
        req.body
    )
    console.log(user);

   try{
    await user.save();
    res.send("succesfully signed up");
   }
   catch(err)
   {
    res.status(400).send("error cant signup",err.message);
   }
   
});





connectDB().then(()=>
    {
        console.log("MongoDB connected");
        app.listen(9000,()=>
            {
                console.log("listening successfully");
            });
    }).catch((err)=>
    {
        console.error(err);
        process.exit(1);
    });
