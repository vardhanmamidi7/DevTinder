const express=require ("express");

const App=express();

App.use("/krishna",(req,res)=>
{
   res.send("Hare Krishna");
}
);

App.use("/",(req,res)=>
    {
       res.send("Radha Krishna ");
    }
    );
App.listen(9000,()=>
{
    console.log("listening successfully");
});