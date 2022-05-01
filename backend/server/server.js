const express = require('express')
const app = express()
app.set('view engine', 'ejs')
app.use(express.static('public'))

const apiRouter = require('./routes') // no need to write index.js since its defaulted

app.use(express.json())
app.use('/api/comment',apiRouter)




app.get('/',(req,res)=>{
    res.render('index')
})






app.listen(4000)