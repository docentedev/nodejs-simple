const express = require('express')
const { getUsers, createTodo, deleteUser } = require('../model/users')
const router = express.Router()

router.get('/', async (req, res) => {
    const users = await getUsers()
    res.json(users)
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
    const user = await deleteUser(id)
    res.json(user)
})

module.exports = router
