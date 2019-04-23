const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json())
// this is not needed for this app but could be handy in the future to parse url encoded data:
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader('Access-Control-Allow-Methods',
  'GET, POST, PATCH, DELETE, OPTIONS')
  next();
});

app.post('/api/posts', (req, res, next) => {
  const posts = req.body;
  console.log();
  res.status(201).json({
    message: 'Post added successfully'
  });
});

app.get('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: 'asdfasdf',
      title: 'First server-side post',
      content: 'This is coming from the server'
    },
    {
      id: 'djkdkjhw',
      title: 'Second server-side post',
      content: 'Second post coming from the server'
    }
  ];
  res.status(200).json({
    message: 'Posts fetched successfully!',
    posts: posts
  });
});

module.exports = app;
