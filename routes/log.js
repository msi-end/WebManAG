const express = require('express');
const router = express.Router()
const body = require('body-parser')


router.get('/login', (req, res) => {
    res.render('./page/login')
})

router.post('/data', (req, res) => {
   const a = req.body;
   console.log(a);
   res.status(200).send('submitted')
})

module.exports = router

