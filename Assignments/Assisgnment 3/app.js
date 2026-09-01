const express=require('express')
const app=express()
app.use(express.json())
let books = [
{ id: 1, title: "Atomic Habits", author: "James Clear", genre: "self-help", price: 499 },
{ id: 2, title: "Deep Work", author: "Cal Newport", genre: "self-help", price: 450 },
{ id: 3, title: "1984", author: "George Orwell", genre: "fiction", price: 350 },
{ id: 4, title: "Sapiens", author: "Yuval Noah Harari", genre: "history", price: 599 }
];
app.get("/books",(req,res)=>{
    res.send(books)
})
app.get("/books/:id",(req,res)=>{
    let id=req.params;
    let data=books.find((a)=>{
        a.id=Number(id)
    })
    if(!data){
        res.status(404).json({msg:"book not found"})
    }
    else{
        res.status(200).json({msg:data})
    }
})