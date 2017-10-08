const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const path = require('path');
const config = require('config');


const customerRoute = require('./router/customer');
const productRoute = require('./router/product');
const invoicesRoute = require('./router/invoice');
const invoicesItemRoute = require('./router/invoiceItem');


const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

app.use(customerRoute);
app.use(productRoute);
app.use(invoicesRoute);
app.use(invoicesItemRoute);

// Redirect all non api requests to the index
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Starting express server
http.createServer(app).listen(config.get('app.port'), function () {
  console.log('Express server listening on port ' + config.get('app.port'));
});


module.exports = app;
