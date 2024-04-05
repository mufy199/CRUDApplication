const express = require('express')
const connectDb = require('./config/dbConnection')
const dotenv = require("dotenv").config()
const errorHandler = require('./middleware/errorHandler')
const cors = require('cors')
connectDb()
const app = express()
app.use(cors())
const port = process.env.PORT || 5000

app.use(express.json())
app.use('/api/contacts',require('./routes/contactRoute'))
app.use(errorHandler)

app.listen(port,() => console.log("Server is running on port:",port))