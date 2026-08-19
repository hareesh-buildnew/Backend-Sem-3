let express = require('express')
let app=express()
let products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 79.99,
    category: "Electronics",
    inStock: true
  },
  {
    id: 2,
    name: "Ergonomic Office Chair",
    price: 189.50,
    category: "Furniture",
    inStock: true
  },
  {
    id: 3,
    name: "Stainless Steel Water Bottle",
    price: 24.95,
    category: "Fitness",
    inStock: false
  },
  {
    id: 4,
    name: "Leather Journal Notebook",
    price: 15.00,
    category: "Stationery",
    inStock: true
  }
];

app.use(express.json())
app.get('/',(req,res)=>{
    res.send("Helllloooo")
})
app.get('/funny',(req,res)=>{
    res.send("Funny")
})
app.get('/new/:id',(req,res)=>{
    res.send(req.params.id+"hehehehe")
})

app.get("/search",(req,res)=>{
    res.send("FirstName")
})
app.get("/products",(req,res)=>{
    res.send(products)
})
app.post('/data',(req,res)=>{
    console.log(req.body);
    res.status(200).json(req.body)
})
app.listen(3000,()=>{
    console.log("Server running successfully")
})