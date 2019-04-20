const express = require('express');

const app = express();

app.use('/api/posts', (req, res, next) => {
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
