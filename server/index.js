require('dotenv').config()
const massive = require('massive')
const express = require('express')
const session = require('express-session')
const authCtrl = require('./controllers/authController')
const itemCtrl = require('./controllers/itemController')
const cartCtrl = require('./controllers/cartController')

const {connection_string, session_secret, server_port} = process.env

const app = express()

//TOP LEVEL MIDDLEWARE
app.use(express.json())
app.use(session({
    secret: session_secret,
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 1000 *60 *60 *24} 
}))

//DATABASE CONNECTION
massive({
    connectionString: connection_string,
    ssl: {rejectUnauthorized: false}
})
    .then((db) => {
        app.set('db', db)
        console.log('db connected')
    })
    .catch(err => console.log(err))

//ENDPOINTS

app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.get('/auth/logout', authCtrl/logout)
app.get('/auth/me', authCtrl.getUser)

app.get('/api/items', itemCtrl.getItems)

app.get('/api/cart', cartCtrl.getCart)
app.post('/api/cart/:item_id', cartCtrl.addToCart)
app.delete('/api/cart/:item_id', cartCtrl.deleteItemFromCart)
app.put('/api/cart/:item_id', cartCtrl.changeCartQty)