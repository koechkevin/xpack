const express = require('express');
const path = require('path');
const port = process.env.port||5673;
const app = express();

const DIST = path.resolve(__dirname, 'dist');

app.use(express.static(DIST));

app.get('*', (req, res) =>{
  res.sendFile(
    path.resolve(
      DIST, 'index.html'
    )
  )
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
