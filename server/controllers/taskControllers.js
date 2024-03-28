const TaskModel = require('./../models/Employee.js')

module.exports.getCategory = async (request, response)=>{
    const tasks = await TaskModel.find()
    response.send(tasks)
}

module.exports.saveCategory =  (request, response)=>{
    const { task } = request.body

    TaskModel.create({task}).then((data)=>{
        console.log('Saved Successfully...')
        response.status(200).send(data)
    }).catch(error => {
        console.log(error)
        response.send({error: error, message: 'Something went wrong!'})
    })
}

module.exports.updateCategory =  (request, response)=> {
    const id = request.params.id
    const { task } = request.body

    TaskModel.findByIdAndUpdate(id, {task}).then(()=>{
        response.status(200).send('Updated Successfully...')
    }).catch(error => {
        console.log(error)
        response.send({error: error, message: 'Something went wrong!'})
    })
}

module.exports.deleteCategory =  (request, response)=> {
    const id = request.params.id

    TaskModel.findByIdAndDelete(id).then(()=>{
        response.status(200).send('Deleted Successfully...')
    }).catch(error => {
        console.log(error)
        response.send({error: error, message: 'Something went wrong!'})
    })
}


module.exports.getProduct = async (request, response)=>{
    const tasks = await TaskModel.find()
    response.send(tasks)
}

module.exports.saveProduct =  (request, response)=>{
    const { task } = request.body

    TaskModel.create({task}).then((data)=>{
        console.log('Saved Successfully...')
        response.status(200).send(data)
    }).catch(error => {
        console.log(error)
        response.send({error: error, message: 'Something went wrong!'})
    })
}
module.exports.updateProduct =  (request, response)=> {
    const id = request.params.id
    const { task } = request.body

    TaskModel.findByIdAndUpdate(id, {task}).then(()=>{
        response.status(200).send('Updated Successfully...')
    }).catch(error => {
        console.log(error)
        response.send({error: error, message: 'Something went wrong!'})
    })
}

module.exports.deleteProduct =  (request, response)=> {
    const id = request.params.id

    TaskModel.findByIdAndDelete(id).then(()=>{
        response.status(200).send('Deleted Successfully...')
    }).catch(error => {
        console.log(error)
        response.send({error: error, message: 'Something went wrong!'})
    })
}
