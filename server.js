const express = require('express')
const PORT = process.env.PORT || 8000
const app = express()

app.use(__dirname + '/public')

app.get('/', (req, res) => {
    res.send('index.html')
})

app.post('/upload', (req, res) => {
    if (!req.files)
    return res.status(400).send('No files were uploaded.')

    console.log(req.files.fileUploader.data.length)
    res.send({"sizeInBytes": req.files.fileUploader.data.length})
})

app.listen(PORT, () => {
    console.log('Listening. . .')
})