require('dotenv').config()
const express = require('express')
const app = express()
const PORT = 3000
const logs = require ('./models/logs')
const reactViews = require('express-react-views')
const mongoose = require('mongoose')
const methodOverride = require('method-override')

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
mongoose.connection.once('open', () => {
    console.log ('connected to mongo')
})

//========Engine=========

app.set ('view engine', 'jsx')
app.engine ('jsx', reactViews.createEngine ())


// ===Middleware======

app.use(express.urlencoded({extended: false}))
app.use(methodOverride('method'))
app.use(express.static('public'))



//=====Routes======
app.use('/logs', logs)



//=======Port listener =========

app.listen(PORT, () => { 
    console.log(`Listening on port: ${PORT}`)
})  