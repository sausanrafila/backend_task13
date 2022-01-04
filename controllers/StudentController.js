//import model
const Student = require("../models/Student")

class StudentController {
    async index(req,res){
        const students = await Student.all()
        const data ={
            message : "Menampilkan data student",
            data : students,
        };
        res.status(200).json(data);
    }

    async store(req,res){
        const student = await Student.create(req.body)
        const data ={
            message : `Menambahkan data student:`,
            data : student,
        };
        res.status(201).json(data);
    }

    async update(req,res){
        //cek apakah id student ada
        //jika ada,lakukan update
        //jika tidak,kirim data tidak ada
        const {id} = req.params;
        const student = await Student.find(id)
        
        if (student){
            const studentUpdated = await Student.update(id,req.body)
            const data = {
                message : "Mengupdate data student",
                data : studentUpdated,
            }
            
            res.status(201).json(data);
        }else{
            const data = {
                message : "Student not found"
            }

            res.status(404).json(data)
        }

        
    }

    async destroy(req,res){
        const {id} = req.params;
        //cari id
        //jika ada ,hapus data
        //jika tidak,kirim data tidak ada

        const student = await Student.find(id)

        if(student){
            await Student.delete(id);

            const data ={
                message : "Menghapus data student"
            }

            res.status(200).json(data)
        }else{
            const data = {
                message : "Data tidak ada"
            }

            res.status(404).json(data)
        }
    }

    async show(req,res){
        const {id} = req.params
        //cari id
        //jika ada,tampilkan data
        //jika tidak,data tidak ada
        const student = await Student.find(id)
        if(student){
            const data = {
                message : "Menampilkan detail student",
                data : student,
            }

            res.status(200).json(data)
        }else{
            const data = {
                message :"data tidak ada"
            }
            
            res.status(404).json(data)
        }

    }
}

//membuat object controller
const object = new StudentController;

//export controller
module.exports = object;