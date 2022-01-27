var express = require('express');
var router = express.Router();

router.get('/query', (req, res) => {
    let { name, surname } = req.query
    res.status(200).json({
        name: name,
        surname: surname
    })
})

router.post('/body', (req, res) => {
    let data = req.body
    res.status(200).send(data)
})

router.get('/param/:year', (req, res) => {
    let { year } = req.params
    res.status(200).send(year)
})

module.exports = router;