const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10; //salt가 몇글자인지
var jwt = require('jsonwebtoken');


const userSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        unique: 1
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
})

//user정보를 저장하기 전에 password 암호화
userSchema.pre('save', function (next) {
    var user = this;
    //password가 변할때만
    if (user.isModified('password')) { 
        //Salt를 이용해서 hash password(암호화된 비밀번호) 만들기
        bcrypt.genSalt(saltRounds, function(err, salt) {
            if(err) return next(err)

            bcrypt.hash(user.password, salt, function(err, hash) { //hash = 암호화된 password
                if(err) return next(err)
                user.password = hash
                next()
            })
        })
    } else {
        next()
    }

})

userSchema.methods.comparePassword = function(plainPassword, cb) {
    //plainPassword 1234567, 암호화된 비밀번호 $2b$10$6Sypy7cLx2yrUM1YW1NRjexpiWnWUjlgj.mskvboxmcpJZanUCAKa
    bcrypt.compare(plainPassword, this.password, function (err, isMatch) {
        if (err) return cb(err);
            cb(null, isMatch)
    })
}


userSchema.methods.generateToken = function(cb) {
    
    var user = this;

    //jsonwebtoekn을 이용해서 token 생성하기
    var token = jwt.sign(user._id.toHexString(), 'secretToken')
    // user._id + 'secretToken' = token
    // ->
    // 'secretToken' -> user._id

    user.token = token
    user.save(function(err, user) {
        if(err) return cb(err)
        cb(null, user)
    })
}


const User = mongoose.model('User', userSchema)

module.exports = { User }