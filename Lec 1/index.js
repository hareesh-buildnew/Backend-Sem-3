import fs from 'fs'
// fs.writeFileSync("index.txt","hiiii")
 let data=fs.readFileSync("index.txt")
 console.log(data.toString(),"heheeheheeee");
// fs.writeFileSync("inde.html","HTML file created")

// console.log(1)
// fs.writeFile("Home.txt","What's up",()=>{
//     console.log("mehehehee")
// })
// console.log("2");
// console.log("A");

// fs.appendFileSync("index.txt","\ngtudetda\nburndgodf\nbyebye!!!")
// fs.mkdirSync("Photos")
fs.writeFileSync("photos/index.txt","hiiiiii")
// fs.unlinkSync('index.txt')
// fs.rmdirSync("Folder")