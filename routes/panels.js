const express = require('express');
const router = express.Router()


router.get('/registration-form', (req, res) => {
   
    res.status(200).render('./registration/registration-form')
})
router.get('/our-staff', (req, res) => {
   
    res.status(200).render('./our-staf/index')
})
router.get('/gallery', (req, res) => {
   
    res.status(200).render('./gallery/index')
})



module.exports = router;