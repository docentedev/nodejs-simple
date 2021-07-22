require('dotenv').config()

const { Client } = require('pg')

const getClient = async () => {
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
    })
    await client.connect()
    return client
}

const getUsers = async () => {
    const client = await getClient()
    const res = await client.query('SELECT * from users')
    await client.end()
    return res.rows
}

const createTodo = async (todo) => {
    const client = await getClient()
    const res = await client.query('INSERT INTO todos (title, description) VALUES ($1, $2) RETURNING *', [todo.title, todo.description])
    await client.end()
    return res.rows[0]
}

const deleteUser = async (id) => {
    const client = await getClient()
    const res = await client.query('DELETE FROM users WHERE id = $1', [id])
    await client.end()
    return res.rowCount
}

module.exports = {
    getUsers,
    createTodo,
    deleteUser,
}