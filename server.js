const express = require('express')
const fileUpload = require('express-fileupload')
const PORT = process.env.PORT || 8000
const app = express()

app.use(express.static(__dirname + '/public'))
app.use(fileUpload())

app.post('/upload', (req, res) => {
    if (!req.files)
    return res.status(400).send('No files were uploaded.')

    res.send({"sizeInBytes": req.files.fileUploader.data.length})
})

app.get('/', (req, res) => {
    res.send('index.html')
})

app.listen(PORT, () => {
    console.log('Server starting...')
})