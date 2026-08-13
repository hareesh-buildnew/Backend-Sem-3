import fs from 'fs'
fs.writeFileSync("welcome.txt","Welcome to Backend Development!")
console.log("File created successfully")

// Question 2
console.log(fs.readFileSync("welcome.txt","utf-8"));

//SECTION B
//Question 3
fs.writeFileSync("task.txt","Task 1: Learn Node")
fs.appendFileSync("task.txt","\nTask 2: Learn fs module")
console.log(fs.readFileSync("task.txt","utf-8"))

//Question 4
fs.writeFileSync("demo.txt","AAA")
fs.writeFileSync("demo.txt","BBB") //Replaces "AAA" or any text already existing 
fs.appendFileSync("demo.txt","CCC") //Adds data

//SECTION B
//Question 5
// fs.mkdirSync("myProject")
fs.writeFileSync("myProject/info.txt","This is inside the folder")
console.log(fs.readdirSync("myProject","utf-8"))

//SECTION C
//Question 6
console.log("1. Start")
fs.readFile("welcome.txt","utf-8",(e,data)=>{
    console.log(data)
})
// fs.mkdirSync("data")
fs.writeFileSync("data/notes.txt","Note 1: Backend is fun")
fs.appendFileSync("data/notes.txt","Note 2: fs module learned\nNote 3: CRUD done")
console.log(fs.readFileSync("data/notes.txt","utf-8"));
// fs.rmSync("data",{ recursive: true })