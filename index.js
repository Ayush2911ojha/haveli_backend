const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const { loginUser } = require('./controllers/auth')
const { createUser } = require('./controllers/auth')
const app = express()




app.use(cors())
app.use(express.json()) 


app.post('/signUp', createUser);

main().catch(err => console.log(err))
async function main () {
    await mongoose.connect('mongodb://127.0.0.1:27017/haveli24')
  console.log('db connected')
}



app.listen(8080, () => {
  console.log('server is running  ')
})
