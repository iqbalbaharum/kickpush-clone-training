const express = require('express')
const session = require('express-session');
const app = express()
const port = 3000

app.set('view engine', 'ejs');
app.use(express.static('./public'));
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));

// routing
app.get('/', (req, res) => {
  res.render('index', {
    session: req.session,
  })
})

const projectList = [
  { 
    logo: 'https://cdn.shopify.com/shopifycloud/hatchful-web/assets/5d6266e7bbcdb8fb017c10000ead2fd3.png',
    company: 'Kicap ABC Sdn Bhd',
    desciption: 'Teaching a school of Life a thing or two',
    tech: 'Mobile App / Website',
    category: 'lifestyle'
  },
  { 
    logo: 'https://cdn.shopify.com/shopifycloud/hatchful-web/assets/01273596e4e92b9de8e8a11cd4ed455e.png',
    company: 'Medicare Sdn Bhd',
    desciption: 'Teaching a school of Life a thing or two',
    tech: 'Website',
    category: 'Medical'
  },
  { 
    logo: 'https://cdn.shopify.com/shopifycloud/hatchful-web/assets/67cbe9b74baf7f893488c5fc426d31eb.png',
    company: 'GameHub Sdn Bhd',
    desciption: 'Game for lonely people',
    tech: 'Game',
    category: 'entertainment'
  }
]

app.get('/projects', (req, res) => {
  res.render('projects', { 
    session: req.session,
    projects: projectList 
  })
})

// Admin
app.get('/admin/login', (req, res) => {
  res.render('admin/login')
})

// temporary
app.get('/admin/user/logged-in', (req, res) => {
  req.session.isLoggedIn = true
  res.redirect('/')
})

app.get('/admin/user/logged-out', (req, res) => {
  req.session.isLoggedIn = false
  res.redirect('/')
})


app.listen(port, () => {
  console.log(`Portfolio app listening at http://localhost:${port}`)
})