const express = require('express');
const https = require('https');
const fs = require('fs');

const app = express();


// Set public folder as root
// app.use(express.static('public'));

// Provide access to node_modules folder from the client-side
app.use('/scripts', express.static(`${__dirname}/node_modules/`));

// Redirect all traffic to index.html
//app.use((req, res) => res.sendFile(`${__dirname}/public/index.html`));

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`)
  });

app.get('/js/app.js', (req, res) => {
res.sendFile(`${__dirname}/public/js/app.js`)
});

  https.createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
  }, app).listen(3001, () => {
    console.log('Listening...')
  })



  
