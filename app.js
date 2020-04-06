const express = require('express');
const logger = require('morgan');
const path = require('path');

const app = express();

const server = require('http').createServer(app);

// keep the heroku app awake!!
// setInterval(function() {
//   require('http').get('http://cardsagainstyoursanity.herokuapp.com');
// }, 300000);

app.use(logger('dev'));
app.use(express.static(`${__dirname}/public`));

const port = process.env.PORT || 3001;

server.listen(port, function() {
  console.log(`Horrible people listen to ${port}`);
});

