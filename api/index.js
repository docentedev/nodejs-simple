const express = require('express')
const { getTodos, createTodo, deleteTodo } = require('../model/todos')
const router = express.Router()

router.get('/', async (req, res) => {
    const todos = await getTodos()
    res.json(todos)
})

router.post('/', async (req, res) => {
    const title = req.body.title || ''
    const description = req.body.description || ''
    const todo = {
        title,
        description
    }
    const newTodo = await createTodo(todo)
    res.json(newTodo)
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id
    const todo = await deleteTodo(id)
    res.json(todo)
})

module.exports = router
