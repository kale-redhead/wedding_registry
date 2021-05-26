module.exports = {
    getItems: (req,res) => {
      const db = req.app.get('db')

      db.items.get_items()
      .then(items => {
        res.status(200).send(items)
      })
      .catch(err => {
        console.log(err)
        res.status(500).send(err)
      })
    }
  }