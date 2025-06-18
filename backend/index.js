const express = require('express')
const mongoose = require('mongoose')
const cors=require('cors')
require('dotenv').config()
const userRouter = require('./routers/user.routes')
const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('Database connected')
}).catch((err) => console.log(err))

app.use('/user', userRouter)

app.listen(process.env.PORT, () =>
    console.log('Servcer started'))