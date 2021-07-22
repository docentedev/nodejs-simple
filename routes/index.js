const express = require('express')
const router = express.Router()
const { getTodos } = require('../model/todos')

router.get('/', async (req, res) => {
    const todos = await getTodos()
    res.render('index', { todos })
})

router.get('/todo-create', (req, res) => {
    res.render('todo-create', {})
})

router.get('/todo-delete/:id', (req, res) => {
    const id = req.params.id
    res.render('todo-delete', { id })
})

module.exports = router
