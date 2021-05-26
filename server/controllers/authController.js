const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req,res) => {
        const db = req.app.get('db')
        const {email, password} = req.body
        const [result] = await db.auth.check_emails(email)
        if(result){
            return res.status(409).send('Email Taken.')
        }

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        const [user] = await db.auth.register_user(email, hash)
        const [cart] = await db.cart.create_cart(user.user_id)
        delete user.password
        req.session.user = user
        req.session.user.cart_id = cart.cart_id
        return res.status(200).send(req.session.user)
      },

    login: async (req, res) => {
        const db = req.app.get('db')
        const {email, password} = req.body
        const [user] = await db.auth.check_emails(email)
        if(!user){
            return res.status(401).send("User Not Found.")
        }

        const isAuthenticated = bcrypt.compareSync(password, user.password)
        if(!isAuthenticated){
            return res.status(401).send('Password Incorrect.')
        }

        const [cart] = await db.cart.get_cart(user.user_id)
        delete user.password
        req.session.user = user
        req.session.user.cart_id = cart.cart_id
        return res.status(200).send(req.session.user)
    },

    logout: async (req,res) => {
        req.session.destroy()
        res.sendStatus(200)
    },

    getUser: async (req,res) => {
        const db = req.app.get('db')
        const {user} = req.session
        if(!user){
            return req.status(511).send('User not logged in.')
        }

        db.cart.get_cart_items(user.cart_id)
        .then((cart) => {
            res.status(200).send({user, cart})
        })
    }
}