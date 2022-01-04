//import controller student
const StudentController = require("../controllers/StudentController")

//import express
const express = require("express")

//membuat object router
const router = express.Router()

//buat routing home
router.get("/",(req,res) => {
    res.send("Hello World ")
})

//buat routing student
router.get("/student",StudentController.index)
router.get("/student/:id",StudentController.show)
router.post("/student",StudentController.store)
router.put("/student/:id",StudentController.update)
router.delete("/student/:id",StudentController.destroy)

//export module routing
module.exports = router;