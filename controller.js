const express = require('express')
const router = express.Router()
//ดักจับform-dataอีกตัว
const multer  = require('multer')
const multerConfig = require('./config/multer_config')
const upload = multer(multerConfig.config).single(multerConfig.keyUpload)




//////http://localhost:1150/product?name=asree&price=123
router.get('/product', (req, res) => {
    res.send('GET Porduct')
});

//////Upload Image
router.post('/product', (req, res) => {
    upload(req, res, (err) => {
        if (err instanceof multer.MulterError) {
            console.log(`Error: ${JSON.stringify(err)}`)
        } else if (err) {
            console.log(`Error: ${JSON.stringify(err)}`)
        }
        const fileName = req.file ? req.file.filename : undefined
        res.send(`POST Product: ${req.params.id} ${fileName}`)
    })


});

module.exports = router 