const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');
app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/projects', (req, res) => {
  res.render('projects')
})


app.listen(port, () => {
  console.log(`Portfolio app listening at http://localhost:${port}`)
})