let express=require('express')
let app=express()
app.get("/latest",(req,res)=>{
    console.log("latest display")
    res.send("Happy Pull")
})
app.listen(4000,()=>{
    console.log("Server........");
    
})