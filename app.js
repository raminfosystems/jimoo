// Jimoo - The Techhub Feedback Tool

// load modules
var mongoose = require('mongoose')
var express = require('express')
var fs = require('fs')

// express setup
var app = express()
var port = process.env.PORT || 3000

// configure assets and views
app.use('/assets', express.static(__dirname + '/public'))
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

// load & set mongo config
var mongoConfig = JSON.parse(fs.readFileSync(__dirname + '/config/mongo-config.json', 'utf8'));
var mongourl = mongoConfig.mongourl

// connect to mongo
mongoose.connect(mongourl)



// load the controllers
var feedbackController = require('./controllers/feedbackController')

feedbackController(app, mongoose)

// Start server.
console.log('Jimoo server listening on port', port);

app.listen(port)

// done -eol