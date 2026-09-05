let express = require("express");
let app = express();
let cors=require('cors')
let jwt = require('jsonwebtoken')
let mongoose = require("mongoose");
let bcryptjs = require("bcryptjs");
const User = require("./db/db.js");
mongoose.connect("mongodb://127.0.0.1:27017/db").then(() => {
  console.log("db....");
});
app.use(express.json());
app.use(cors())
app.post("/signUp", async (req, res) => {
  let { name, email, passWord ,role} = req.body;
  let findData = await User.findOne({ email });
  console.log(findData, "signup...");
  if (findData) {
    return res.send("mundu chesav kadara signup");
  } else {
    let newP = await bcryptjs.hash(passWord, 10);
    let UserData = new User({
      name,
      email,
      passWord: newP,
      role: role|| 'user'
    });
    await UserData.save();
  }
  console.log("Password:",passWord);
  
  res.send("Donee....");
});

// Lec7 Day 2


app.post('/login', async(req,res)=>{
   let {email,passWord}=req.body

 let findData=   await User.findOne({email})    
 console.log(findData,"heheh");

 let validP= await bcryptjs.compare(passWord,findData.passWord)
 if(!validP){
   return res.send("kuch nhi ho payega aapse.....")
 }

  let token=    jwt.sign({email:findData.email,role:findData.role},"hehehehehe")
  console.log(token,"hehe");

 
 res.json({msg:"done",token:token})

})

let auth=(req,res,next)=>{
  let token=req.headers.authorization;
  console.log(token,"tokenn");
  
  if(!token){
    return res.send("kaun hai app...")
  }
  let decode=  jwt.verify(token,"hehehehehe")
  console.log(decode,"isse");
  req.user=decode;
  next()
}


// Lec 8


let roleCheck=(role)=>{
  return (req,res,next)=>{
    if(req.user.role!=role){
      return res.send("who are u.....")
    }
    next()
  }

}
app.get('/admin',auth,roleCheck('admin'),(req,res)=>{
   let role=auth()
   console.log("ROLE:",role);
   if(role=='admin'){
    res.send("MAi admin huu....")
   }
   else{
    res.send("Kaun ho tum")
   }
   next()
})

app.get("/api",auth,roleCheck('admin'),(req,res)=>{
   res.send("heheh")

})
















app.listen(3000, () => {
  console.log("Server running...");
});
