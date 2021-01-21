const express = require('express');
const bearerToken = require('express-bearer-token');
var request = require('request');
var cors = require('cors');
const app = express();
const port = 5000;



app.use(bearerToken());
app.use(cors());
app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
 // res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  res.append('Access-Control-Expose-Headers', 'X-Total-Count');
  res.append('X-Total-Count', 8);
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/api/new', (req, res) => {
  res.send('Hello World New!')
});

//begin api call
app.get('/users', (req, res) => {
  var options = {
    'method': 'GET',
    'url': 'http://iam.localoih.com/api/v1/users',
    'headers': {
      'Authorization': `Bearer ${token}`
    }
  };
  request(options,function (error, response, body) {
    if (error) throw new Error(error);
    res.set({
      'Content-Type': 'application/json',
      'X-Total-Count': '8',
      'Content-Length': '1840',
    });
    console.log(response.headers);
    res.send(body);
        res.end();
  });
});
//end api call

//begin api call
app.get('/flows', (req, res) => {
  var options = {
    'method': 'GET',
    'url': 'http://flow-repository.localoih.com/flows',
    'headers': {
      'Authorization': `Bearer ${token}`
    }
  };
  request(options,function (error, response, body) {
    if (error) throw new Error(error);
    res.set({
      'Content-Type': 'application/json',
      'X-Total-Count': '8',
      'Content-Length': '1840',
    });
    console.log(response.headers);
    res.send(body);
        res.end();
  });
});
//end api call

//begin api call
app.get('/movies', (req, res) => {
  var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://the-one-api.dev/v2/movie',
  'headers': {
    'X-Total-Count': '8',
    'Authorization': `Bearer ${token}`
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});

});
//END api call


app.listen(port, () => {
  console.log(`Workload backend-service app listening at http://localhost:${port}`)
});