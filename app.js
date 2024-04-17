const http=require("http")
const express=require("express")
const app=express()
app.use((req,res,next)=>{
    console.log("in the middle ware")
    next()
})
app.use((req,res,next)=>{
    console.log("in another middle ware")
    res.send('<h1>hello from express</h1>')
})
app.listen(3000)
