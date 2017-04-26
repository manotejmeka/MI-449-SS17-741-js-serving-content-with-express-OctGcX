var express = require('express')
var app = express()
var port = process.env.PORT || 8080

app.set('view engine', 'ejs')
app.use(express.static('public'))

var articles = {}
var navLinks = {}
var images = {}

app.get('/', function (request, response) {
  response.render('pages/index', {
    articles: articles,
    navLinks: navLinks,
    images: images['home']
  })
})

app.get('/about', function (request, response) {
  response.render('pages/about', {
    articles: articles,
    navLinks: navLinks,
    images: images['about']
  })
})

app.get('/action', function (request, response) {
  response.render('pages/action', {
    articles: articles,
    navLinks: navLinks,
    images: images['action']
  })
})

app.get('/adventure', function (request, response) {
  response.render('pages/adventure', {
    articles: articles,
    navLinks: navLinks,
    images: images['adventure']
  })
})

function createArticle (article) {
  var id = Object.keys(articles).length
  article.createdAt = new Date()
  articles[id] = article
}

function createNavLinks (url, name) {
  var id = Object.keys(navLinks).length
  navLinks[id] = {title: name, link: url}
}

function addImage (pageName, obj) {
  if (images.pageName) {
    images.pageName.push(obj)
  } else {
    images.pageName = [obj]
  }
}

addImage('home', {
  url: 'http://pre12.deviantart.net/657c/th/pre/f/2015/009/d/0/movie_genres_folder_by_shahrezs18-d8d6dn5.jpg',
  alt: 'all generes'
})

addImage('home', {
  url: 'https://previews.123rf.com/images/kentoh/kentoh0910/kentoh091000145/5670167-Movie-Poster-of-Film-Genres-Vintage-Background-Stock-Photo.jpg',
  alt: 'all generes'
})

createArticle({
  title: 'Squirrel escapes squirrel prison, now at large!',
  content: 'Yesterday evening at 7:47PM, the criminal squirrel Rabid Rabindra got out of his cage.'
})

createArticle({
  title: 'Squirrel lured back into prison with peanut butter',
  content: 'This morning at 10:13PM, the smell of peanut butter drew Rabid Rabindra the squirrel back into his cage.'
})

createNavLinks('/', 'Home')
createNavLinks('/about', 'About')
createNavLinks('/action', 'Action')
createNavLinks('/adventure', 'Adventure')


app.get('/about', function (request, response) {
  response.end('Ah, where to begin...')
})

app.listen(port)
app.set('view engine', 'ejs')
