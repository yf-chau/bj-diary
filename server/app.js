const express = require('express')
const cors = require('cors')
const logger = require('morgan')

const app = express()

const diaryRouter = require('./routers/diary')

app.use(cors())
app.use(express.json())
app.use(logger('dev'))

app.get('/', (req, res) => {
    res.status(200).send('BJ Diary')
  })

app.use('/diary', diaryRouter)

module.exports = app;
