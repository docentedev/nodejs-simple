const express = require('express')
const router = express.Router()
const { getUsers } = require('../model/users')

router.get('/', async (req, res) => {
    const users = await getUsers()
    res.render('index', { users })
})

router.get('/user-create', (req, res) => {
    res.render('user-create', {})
})

router.get('/user-delete/:id', (req, res) => {
    const id = req.params.id
    res.render('user-delete', { id })
})

module.exports = router
