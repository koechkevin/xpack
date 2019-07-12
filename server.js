const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

// Bind heroku port from environment variables or assign the
// port number 4200 when tested on a different environment.
dotenv.config();
const port = process.env.PORT || 4200;

// Create an express server.
const app = express();

// Folder path where the bundled files reside in.
const DIST = path.resolve(__dirname, 'dist');

// Enable our express server to serve bundled static files.
app.use(express.static(DIST));

// Redirects all other routes to index.html file in the DIST directory
app.use('*', (req, res) => res.sendFile(path.resolve(DIST, 'index.html')));

// run the server
app.listen(port, () => console.log(`listening on port ${port}`));
