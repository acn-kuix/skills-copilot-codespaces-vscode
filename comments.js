// Create web server
// import express
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const comments = require('./comments.json');

// Add middleware
app.use(bodyParser.json());

// Add route
app.get('/comments', (req, res) => {
  // Send back the response
  res.json(comments);
});

app.post('/comments', (req, res) => {
  // Get the data from the request
  const comment = req.body;
  // Add a timestamp
  comment.timestamp = new Date();
  // Add the comment to the array
  comments.push(comment);
  // Send back the response
  res.json(comment);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// Run the server with node comments.js
// Go to http://localhost:3000/comments to see the comments
// Use Postman to post a new comment
// Go to http://localhost:3000/comments to see the new comment