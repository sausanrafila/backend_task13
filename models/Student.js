//import db
const req = require("express/lib/request")
const db = require("../config/database")

//buat Model Student
class Student {
    static all(){
        return new Promise((resolve,reject) =>{
         //lakukan query database
        const sql = "SELECT * FROM students"
        db.query(sql,(err,results) => {
            resolve(results)
        })
        })
    }

    static async create(data) {
        const id = await  new Promise((resolve,reject) =>{
            //query insert ke database
            const sql = 'INSERT INTO students SET ?'

            db.query(sql,data,(err,results) => {
                resolve(results.insertId);
            })
        })

        return new Promise((resolve,reject) =>{
            //query select by id
            const sql = 'SELECT * FROM students WHERE id = ?'

            db.query(sql,id,(err,results) => {
                resolve(results)
            })
        })
    }

    static find(id){
        //lakukan promise select by id
        return new Promise((resolve,reject) => {
            const sql = "SELECT * FROM students WHERE id = ?"

            db.query(sql,id,(err,results) => {
                resolve(results[0])
            })
        })
    }

    static async update(id,data){
        //update data
        await new Promise((resolve,reject) =>{
            //query update data
            const sql = "UPDATE students SET ? WHERE id = ?"
            db.query(sql,[data,id],(err,results) => {
                resolve(results)
            })
        })

        //select data by id
        const student = await this.find(id)
        return student

    }

    static delete(id){
        //query delete
        return new Promise((resolve,reject) => {
            //query sql
            const sql = "DELETE FROM students WHERE id = ?"
            db.query(sql,id,(err,results) =>{
                resolve(results)
            })
        })
    }
}

//export model
module.exports = Student;