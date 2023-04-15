const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const path = require('path');
const publicDirectory = path.join(__dirname, '../public');
app.use(express.static(publicDirectory));

app.set('view engine', 'hbs');

const viewsDirectory = path.join(__dirname, '../temp1/views');
app.set('views', viewsDirectory);

//////////////////////////////////////////////////////////////////

var hbs = require('hbs');

const partialsPath = path.join(__dirname, '../temp1/partials');

hbs.registerPartials(partialsPath);

///////////////////////////////////////////////////////////////////

app.get('/', (req, res) => {
  res.render('index', { header: 'header', navbar: 'navbar', footer: 'footer' });
});

app.get('/about', (req, res) => {
  res.render('about', { header: 'header', navbar: 'navbar', footer: 'footer' })
})

app.get('/amenities', (req, res) => {
  res.render('amenities', { header: 'header', navbar: 'navbar', footer: 'footer' })
})
app.get('/booking', (req, res) => {
  res.render('booking', { header: 'header', navbar: 'navbar', footer: 'footer' })
})
app.get('/contact', (req, res) => {
  res.render('contact', { header: 'header', navbar: 'navbar', footer: 'footer' })
})
app.get('/login', (req, res) => {
  res.render('login', { header: 'header', navbar: 'navbar', footer: 'footer' })
})
app.get('/room', (req, res) => {
  res.render('room', { header: 'header', navbar: 'navbar', footer: 'footer' })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
