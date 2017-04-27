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
    headerPhrase: 'Movies',
    articles: articles,
    navLinks: navLinks,
    images: images['home']
  })
})

app.get('/about', function (request, response) {
  response.render('pages/about', {
    headerPhrase: 'About me',
    articles: articles,
    navLinks: navLinks,
    images: images['about']
  })
})

app.get('/action', function (request, response) {
  response.render('pages/action', {
    headerPhrase: 'Action Movies',
    articles: articles,
    navLinks: navLinks,
    images: images['action']
  })
})

app.get('/adventure', function (request, response) {
  response.render('pages/adventure', {
    headerPhrase: 'Adventure Movies',
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
  if (images[pageName]) {
    images[pageName].push(obj)
  } else {
    images[pageName] = [obj]
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

addImage('about', {
  url: 'https://static.comicvine.com/uploads/original/7/74477/3356997-marvel-movies-marvel-comics-13616861-2560-1600.jpg',
  alt: 'marvel movies'
})

addImage('about', {
  url: 'https://moviesorder.com/wp-content/uploads/2014/10/dc-comics.jpg',
  alt: 'dc movies'
})

addImage('about', {
  url: 'http://timesofindia.indiatimes.com/thumb/msid-54497780,width-400,resizemode-4/54497780.jpg',
  alt: 'indian movies'
})

addImage('about', {
  url: 'http://downloadbuymovies.net/wp-content/uploads/2014/10/harry-potter-movies-in-order.jpg',
  alt: 'harry potter movies'
})

addImage('action', {
  url: 'https://s2-ssl.dmcdn.net/PDTWg/1280x720-cAb.jpg',
  alt: 'tom\'s movies'
})

addImage('action', {
  url: 'https://i.ytimg.com/vi/RW7C590jVHc/maxresdefault.jpg',
  alt: 'iron man movies'
})

addImage('action', {
  url: 'http://media1.break.com/dnet/media/581/905/2905581/7-badass-action-movies-based-on-historical-events-image-4.jpeg',
  alt: '300 movies'
})

addImage('adventure', {
  url: 'http://cdn.collider.com/wp-content/uploads/star-wars-universe.jpg',
  alt: 'starwars movies'
})

addImage('adventure', {
  url: 'https://moviesorder.com/wp-content/uploads/2014/08/pirates-of-the-Caribbean.jpg',
  alt: 'pirates of the caribbean movies'
})

addImage('adventure', {
  url: 'https://lebeauleblog.files.wordpress.com/2015/11/terminator-movie-posters.png?w=620&h=465',
  alt: 'terminator movies'
})

createArticle({
  title: 'Genre',
  content: 'I like to watch Action, Adventure, Comedy, International language and Horror'
})

createArticle({
  title: 'Languages',
  content: 'I watch English, Telugu, Hindi, Spanish and asian language movies with subtitles'
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
