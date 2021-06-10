require('dotenv').config()
const massive = require('massive')
const express = require('express')
const session = require('express-session')
const authCtrl = require('./controllers/authController')
const itemCtrl = require('./controllers/itemController')
const cartCtrl = require('./controllers/cartController')
const auth = require('./middleware/authMiddleware')
const { default: Items } = require('../src/components/Items')
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc')

const app = express()
const {CONNECTION_STRING, SESSION_SECRET, SERVER_PORT} = process.env

//TOP LEVEL MIDDLEWARE
app.use(express.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 1000 *60 *60 *24} 
}))

//DATABASE CONNECTION
massive({
    connectionString: CONNECTION_STRING,
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
app.get('/auth/logout', authCtrl.logout)
app.get('/auth/me', authCtrl.getUser)

app.get('/api/items', itemCtrl.getItems)

app.get('/api/cart', cartCtrl.getCart)
app.post('/api/cart/:item_id', cartCtrl.addToCart)
app.delete('/api/cart/:item_id', cartCtrl.deleteItemFromCart)
app.put('/api/cart/:item_id', cartCtrl.changeCartQty)

app.get('/api/cart/user', auth.usersOnly, cartCtrl.getCart);
app.post('/api/cart/user', auth.usersOnly, cartCtrl.addToCart);
app.get('/api/cart/all', auth.usersOnly, auth.adminsOnly, cartCtrl.getAllItems);

app.post('/create-checkout-session', async (req,res) => {
    const check = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: items.name,
                        images: [items.image],
                    },
                    unit_amount: items.price,
                },
                quantity: item_cart_junction.quantity,
            },
        ],
        mode: 'payment',
        success_url: `${YOUR_DOMAIN}/success.html`,
        cancel_url: `${YOUR_DOMAIN}/cancel.html`
    })
    res.json({id: check.id})
})


app.listen(SERVER_PORT, () => console.log(`app is listening on port ${SERVER_PORT}`))