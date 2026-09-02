let express=require("express")
let app=express()
const fs=require("fs")
app.set("view engine","ejs")
app.get('/',(req,res)=>{
    console.log("home");

    fs.readdir("./files",(err,files)=>{
        if(err){
            return res.status(500).send(err)
        }
        res.send("helelellooo")

    })
    
})
app.listen(4000,()=>{
    console.log("Server is running successfully.......");
    
})