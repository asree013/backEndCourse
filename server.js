const express = require('express')
const app = express()

//middle ware รับค่าที่เป็น Jason และForm-data(multiPart)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(require('./controller'))

const PORT = process.env.PORT || 1150
app.listen(PORT, () => {
    const env = `${process.env.NODE_ENV || 'development'}`
    console.log(`APP Listening on Port "${PORT}"`);
    console.log(`APP Listening on env "${env}"`);
    console.log(`Ctrl + C To Stop`);
})