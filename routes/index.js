const express = require('express');
const router = express.Router()

router.get('/', (req, res)=>{
    res.render('index', {title: "This is an index page"})
})
router.get('/layout', (req, res)=>{
    res.render('layout')
})

module.exports = router