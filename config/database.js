//import mysql 
const mysql = require("mysql")

//import dotenv dan config
const dotenv = require("dotenv").config()

//buat koneksi
const db = mysql.createConnection({
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

// konek ke database
db.connect(function(err){
    if (err){
        console.log(`koneksi error: ${err}`);
        return;
    }else{
        console.log("koneksi berhasil");
        return;
    }
});

// export db

module.exports = db;