const express = require('express')
const handlebars = require('express-handlebars')
const getTodos = require('./get-todos')
const app = express()
const port = process.env.PORT || 5000

app.use('/static', express.static('public'))

app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

app.get('/', async (req, res) => {
    const todos = await getTodos()
    res.render('index', { todos });
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})