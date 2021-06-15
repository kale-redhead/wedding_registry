require('dotenv').config()
const massive = require('massive')
const express = require('express')
const session = require('express-session')
const authCtrl = require('./controllers/authController')
const itemCtrl = require('./controllers/itemController')
const cartCtrl = require('./controllers/cartController')
const auth = require('./middleware/authMiddleware')
// const { default: Items } = require('../src/components/Items')

const app = express()
app.use(express.static('.'))
const {CONNECTION_STRING, SESSION_SECRET, SERVER_PORT, STRIPE_SK} = process.env
const YOUR_DOMAIN = 'http://localhost:3000/checkout';
const stripe = require('stripe')(STRIPE_SK)

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

app.post('/create-checkout-session', async (req, res) => {
    const {cart} = req.body

    const stLineItems = cart.map(item => {
      return {
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name,
          },
          unit_amount: item.price * 100,
        },
        quantity: item.quantity,
      }
    })
    console.log('line 70 index.js', stLineItems)

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: stLineItems,
      mode: 'payment',
      success_url: `${YOUR_DOMAIN}?success=true`,
      cancel_url: `${YOUR_DOMAIN}?canceled=true`,
    });
    console.log(session.id)
    res.status(200).send({ id: session.id })
  });


app.listen(SERVER_PORT, () => console.log(`app is listening on port ${SERVER_PORT}`))