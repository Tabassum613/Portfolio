const express = require('express')
const dotenv= require("dotenv")
const app = express()

dotenv.config();
const PORT =process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})