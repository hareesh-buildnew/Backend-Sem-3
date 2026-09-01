let express = require("express");
let app = express();
let cors=require('cors')
let mongoose = require("mongoose");
let bcryptjs = require("bcryptjs");
const User = require("./db/db.js");
mongoose.connect("mongodb://127.0.0.1:27017/db").then(() => {
  console.log("db....");
});
app.use(express.json());
app.use(cors())
app.post("/signUp", async (req, res) => {
  let { name, email, passWord } = req.body;
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
    });
    await UserData.save();
  }
  console.log("Password:",passWord);
  
  res.send("Donee....");
});

// Lec7 Day 2
app.post("/login",async(req,res)=>{
  let {email,passWord} = req.body;
  let findData= await User.findOne({email})
  console.log(findData,"data milgaya")
  
  let checker= await bcryptjs.compare(passWord,findData.passWord)
  if(!checker){
    return res.send("Password bhi nahi type kar pa rahe ho")
  }
  res.send("login completed")
})




















app.listen(3000, () => {
  console.log("Server running...");
});
