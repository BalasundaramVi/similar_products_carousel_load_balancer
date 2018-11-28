require('newrelic');
const express = require('express');

const morgan = require('morgan');
const parser = require('body-parser');

const app = express();

app.use(parser.json());
app.use(morgan('dev'));

let count = 0;

app.get('/', (req, res) => {
  count++;
  if (count === 10000) {
    count = 0;
  }
  if (count % 2 === 0) {
    res.redirect('http://ec2-54-193-82-60.us-west-1.compute.amazonaws.com:3001/')
  } else {
    res.redirect('http://ec2-54-183-223-101.us-west-1.compute.amazonaws.com:3001/')
  }
});

app.listen(3030, () => {
  console.log('>>>>> Listening on port 3030');
});
