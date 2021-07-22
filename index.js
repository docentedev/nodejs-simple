const express = require('express')
const handlebars = require('express-handlebars')
const indexRoute = require('./routes/index')
const todosApi = require('./api/index')
const app = express()
const port = process.env.PORT || 4000

app.use(express.json()) // for parsing application/json

app.use('/static', express.static('public'))

app.use('/', indexRoute)
app.use('/todos', todosApi)

app.engine('handlebars', handlebars())
app.set('view engine', 'handlebars')


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})