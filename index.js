const express = require('express')
const bodyParser = require('body-parser')
const db = require('./config/database')
const loginrouter = require('./routes/login')
const signuprouter = require('./routes/signup')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


app.get('/',(req,res)=>{
    res.send('hello')
})
app.use('/M1',loginrouter)
app.use('/M1',signuprouter)

db
 .authenticate()
 .then(()=> {
  console.log('Connection has been established successfully.');
 }) 
 .catch (err=> {
  console.error('Unable to connect to the database:', err);
 })

app.listen(port, ()=> console.log(`server is work on port ${port}`))