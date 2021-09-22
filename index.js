require("dotenv").config()
const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')


const PORT = process.env.PORT || 3000

const app = express ()
const hbs = exphbs.create({
    defaultLayout:'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

async function start() {
  try {
    await mongoose.connect(
      'mongodb+srv://efimov:1q2w3e4r5t@cluster0.ustve.mongodb.net/todos',
      {
        useNewUrlParser: true
      }
    )
    app.listen(PORT, () => {
      console.log('сервер робит')
    })
  } catch (e) {
    console.log(e)
  }
}
start()
