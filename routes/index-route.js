const express = require('express');
const router = express.Router()


router.get('/about-us', (req, res) => {
    console.log(req)
    res.status(200).render('./page/about-us')
})
router.get('/Contact-Us', (req, res) => {
    res.status(200).render('./page/Contact-Us')

})
router.get('/about-principal', (req, res) => {
    res.status(200).render('./page/about-principal')

})
router.get('/aboutvp', (req, res) => {
    res.status(200).render('./page/aboutvp')

})

router.get('/rector', (req, res) => {
    res.status(200).render('./page/rector')

})
router.get('/Facilities', (req, res) => {
    res.status(200).render('./page/Facilities')

})
router.get('/Faculties', (req, res) => {
    res.status(200).render('./page/Faculties')

})
router.get('/Fees-Structure', (req, res) => {
    res.status(200).render('./page/Fees-Structure')

})
router.get('/Rules-Regulations', (req, res) => {
    res.status(200).render('./page/Rules-Regulations')

})
module.exports = router;