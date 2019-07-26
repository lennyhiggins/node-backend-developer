const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyparser = require('body-parser')
const calculateRoute = require('./api/routes/calculate')
const usersRoute = require('./api/routes/user')
const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/contacts');
mongoose.connect('mongodb://localhost/testdb', {
    useCreateIndex: true,
    useNewUrlParser: true
  })
  
const db = mongoose.connection
db.on('error', (err) => {
    console.log('err')
}) 
db.once('open', () => {
    console.log('DB is connected')  
})

const app = express() 
const PORT = process.env.PORT || 3000 
app.use(morgan('dev')) 
app.use(cors())    
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.use('/api/users', usersRoute)
app.use('/api/calculate', calculateRoute)

app.get('/', (req, res) => { 
        res.send("Hello world")
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`) 
})

module.exports = app;