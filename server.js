var bodyParser = require('body-parser')
const express = require('express')
const app = express()
const mongoose = require('mongoose')


let connectionString;
if(process.env.MLAB_USERNAME_WEBDEV) {
    var username = process.env.MLAB_USERNAME_WEBDEV;
    var password = process.env.MLAB_PASSWORD_WEBDEV;
    connectionString = 'mongodb://' + username + ':' + password;
    connectionString += '@ds017636.mlab.com:17636/heroku_7227zkwd';
} else {
    connectionString = 'mongodb://localhost:27017/whiteboard-cs5600-sp20'
}

mongoose.connect(connectionString,{useNewUrlParser: true, useUnifiedTopology: true })
app.use(bodyParser.json())
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
               'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
               'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

require('./controllers/quiz.controller.server')(app)
require('./controllers/question.controller.server')(app)
require('./controllers/quiz-attempts.controller.server')(app)



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});
