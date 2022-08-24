const express = require('express');
const router = express.Router()
const fs = require('fs')

const logininfo = fs.readFileSync('login.json')
const loginfoparse = JSON.parse(logininfo)
//console.log(loginfoparse);

router.get('/login', (req, res) => {
    res.render('./page/login')
})

router.post('/login/loginfo', (req, res) => {
   const a = req.body;
    if (a.Email === loginfoparse.Email && a.password === loginfoparse.Password) {
       res.status(200).send('You are Login') 
    }else{
        res.status(400).send('You are not Login')
    }
})



module.exports = router

