require('dotenv').config();
const controller = require('./controller');
const express = require('express')
const massive = require('massive');
const bodyParser = require('body-parser');

const app = express();
app.use( bodyParser.json() );

let {
    SERVER_PORT,
    CONNECTION_STRING,
  } = process.env;
  

  massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('database ready')
  });

  app.post('/api/auth/register', controller.register)
  app.post('/api/auth/login', controller.login)
  app.get('/api/posts:id', controller.showPosts)


  app.listen(SERVER_PORT, () => {
    console.log(`I'll be right by your side, til ${SERVER_PORT}!  Hol up!`)
})