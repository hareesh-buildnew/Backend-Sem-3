import fs from 'fs'
fs.writeFileSync("welcome.txt","Welcome to Backend Development!")
console.log("File created successfully")

// Question 2
console.log(fs.readFileSync("welcome.txt","utf-8"));

//SECTION B
//Question 3
fs.writeFileSync("task.txt","Task 1: Learn Node")
fs.appendFileSync("task.txt","\nTask 2: Learn fs module")
console.log(fs.readFileSync("task.txt"))

//Question 4
fs.writeFileSync("demo.txt","AAA")
fs.writeFileSync("demo.txt","BBB") //Replaces "AAA" or any text already existing 
fs.appendFileSync("demo.txt","CCC") //Adds data

//SECTION B
//Question 5
// fs.mkdirSync("myProject")
fs.writeFileSync("myProject/info.txt","This is inside the folder")
console.log(fs.readdirSync("myProject","utf-8"))