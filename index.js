const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const { User } = require("./models/User");

const config = require("./config/key");

//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

//application/json
app.use(bodyParser.json());


const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
    //useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false //mongoose 버전이 6이상인 경우는 필요없음
}).then(() => console.log('MongoDB Connected..'))
.catch(err => console.log(err))


app.get('/', (req, res) => {res.send('Hello World! 안녕하세요~')})


app.post('/register', (req, res) => {
    //회원 가입할 때 필요한 정보들을 client에서 가져오면 
    //그 데이터를 데이터베이스에 넣어준다.
    
    const user = new User(req.body)

    //mongoDB에서 오는 method
    user.save((err, userInfo) => {
        if (err) return res.json({ success: false, err }) //실패시 에러메세지
        return res.status(200).json({ //성공시
            success: true 
        })
    })
})




app.listen(port, () => {console.log(`Example app listening on port ${port}`)})