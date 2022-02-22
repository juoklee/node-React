const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://juokLee:db1234@boilerplate.f8lex.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    //useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false //mongoose 버전이 6이상인 경우는 필요없음
}).then(() => console.log('MongoDB Connected..'))
.catch(err => console.log(err))

app.get('/', (req, res) => {res.send('Hello World!')})

app.listen(port, () => {console.log(`Example app listening on port ${port}`)})