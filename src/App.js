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
    // console.log(user);

   try{
    await user.save();
    res.send("succesfully signed up");
   }
   catch(err)
   {
    res.status(400).send("error cant signup",err.message);
   }
   
});

app.get("/user",async(req,res)=>
{   const Useremailid=req.body.emailId;
    try{
        const user=await User.find({emailId:Useremailid});
        if(user.length===0)
        {
            res.status(404).send("User not found");
            return;
        }
        else
        res.send(user);

    }
    catch(err)
    {
        res.status(500).send("error in fetching data",err.message);
    }
})

app.get("/feed",async(req,res)=>
    {  
        try{
            const user=await User.find({});
            if(user.length===0)
            {
                res.status(404).send("User not found");
                return;
            }
            else
            res.send(user);
    
        }
        catch(err)
        {
            res.status(500).send("error in fetching data",err.message);
        }
    })
    

    app.delete("/deleteUser",async(req,res)=>
    {
        const id=req.body.id;
        try{
            const user=await User.findByIdAndDelete(id);//we can passs id simply or else we can send it like obj {_id:id}
            if(!user)
            {
                res.status(404).send("User not found");
                return;
            }
            else
            res.send("User deleted successfully");
        }
        catch(err)
        {
            res.status(500).send("error in deleting data",err.message);
        }
    })


    app.patch("/updateUser",async(req,res)=>
    {   const userId=req.body.id;
        const data=req.body;
        
        try{
            const Allowed_Updates=["firstName","lastName","gender","age"];

        const isAllowed=Object.keys(data).every((k)=>
        allowed_Updates.includes(k));
        if(!isAllowed)
        {
            throw new Error("Update not Allowed");
        }
            const user=await User.findByIdAndUpdate(userId,data,{new:true},{runValidators:true});//we can passs id simply or else we can send it like obj {_id:id}
            if(!user)
            {
                res.status(404).send("User not found");
                return;
            }
            else
            res.send("User updated successfully");

        }
        catch(err)
        {
            res.status(500).send("error in updating data",err.message);
        }
    })



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
