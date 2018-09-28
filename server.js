const express = require('express');
var zip = require('express-zip');

const app = express();

app.get('/api/zip', function(req, res) {
  res.zip([
    { path: './client.zip', name: 'client.zip' }
  ]);
});

const port = 8080;

app.listen(port, () => `Server running on port ${port}`);