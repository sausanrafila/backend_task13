//import express
const express = require("express")
const res = require("express/lib/response")

//buat object express
const app = express()

//menggunakan middleware json
app.use(express.json())

//definisikan route
const router = require("./routes/api")
app.use(router)

//definisikan port
app.listen(3000,()=>{
    console.log("Server running at http://localhost:3000");
})

