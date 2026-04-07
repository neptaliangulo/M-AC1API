const express = require('express')
const products_routes = require('./routes/products.js')
const users_routes = require('./routes/users.js')  
const slugify = require('slugif')

const app = express()

app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static('/views'));

app.use(express.json())
app.use('/', products_routes)
app.use('/api/users', users_routes)  

app.listen(5000, () => {
    const msg = slugify('server is listening on port 5000', { replacement: '*' })
    console.log(msg)
})