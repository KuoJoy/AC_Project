// Include express from node_modules and define server related variables
const express = require('express')
const app = express()
const port = 3000

// setting the route and corresponding response
// localhost:3000  ==> This is my first Express Web App
app.get('/', (req, res) => {
  res.send('This is my first Express Web App')
})

// localhost:3000/food  ==> My favorite food is ice cream
app.get('/foods/:food', (req, res) => {
  res.send(`<h1>My favorite food is ${req.params.food}</h1>`)
})

// localhost:3000/popular/languages  ==> JavaScript is a popular language
app.get('/popular/languages/:language', (req, res) => {
  // console.log(req.params.language)
  res.send(`<h1>${req.params.language} is a popular language</h1>`)
})

// Listen the server when it started
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})