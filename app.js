const http=require("http")
const express=require("express")
const bodyParser=require('body-parser')
const app=express()
app.use(bodyParser.urlencoded({extended:false}))

app.use('/add-product', (req,res,next)=>{
    res.send('<form action="/product" method="POST">Name<input type="text" name="title">Size<input type="number" name="size"><button type="submit">Add Product</button></form>')
})
app.post('/product', (req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
})
app.use('/', (req,res,next)=>{
    res.send('<h1>hello from express</h1>')
})

app.listen(3000)
