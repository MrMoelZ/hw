const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

const server = app.listen(process.env.PORT || 3003, () => {
    console.log('listening on ', server.address().port)
})
