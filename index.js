const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
  console.log("THIS IS A CONSOLE LOG LOOK HOW LOGGED THIS IS")
  console.log("ARE YOU NOT ENTERTAINED")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})