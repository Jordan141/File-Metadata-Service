const express = require('express')
const app = express()

app.use(__dirname + '/public')

app.get('/', (req, res) => {
    res.send('index.html')
})

app.post('/upload', (req, res) => {
    console.log(req.files.fileUploader.name)
})