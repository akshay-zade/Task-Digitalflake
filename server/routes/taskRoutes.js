const { Router } = require('express')
const { 
    getCategory,
    saveCategory,
    updateCategory,
    deleteCategory,
    getProduct,
    saveProduct,
    updateProduct,
    deleteProduct
} = require('./../controllers/taskControllers')
const router = Router()

router.get('/get', getCategory)
router.post('/save', saveCategory)
router.put('/update/:id', updateCategory)
router.delete('/delete/:id', deleteCategory)
router.get('/get' , getProduct)
router.post('/save' , saveProduct)
router.put('/update/:id' , updateProduct)
router.delete('/delete/:id' , deleteProduct)
module.exports = router