const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const PORT = 3001 ;
const EmployeeModel = require('./models/Employee')
const route = require('./routes/taskRoutes')
const app = express()

 
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/employee')

app.post('/login' , (req,res)=>{
    const {email,password} = req.body
     EmployeeModel.findOne({email:email})
     .then(user => {
        if(user){
             if(user.password === password){
                res.json('Success')
               
             }else{
                res.json('The password is incorrect')
             }
        }else{
            res.json('No record existed')
        }
     })
})

app.post('/register' ,(req,res) => {
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(error => res.json(error))
})
app.use('/api' , route)

app.listen(PORT,()=>{
    console.log(`Server Running Successfully On Port ${PORT}`)
})