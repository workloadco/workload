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
      'Authorization': 'Bearer pMwbSO7Fyky7Qt_HxcQYrvzuShTttYyTHB0o3Ja9CzHn2wCoNVYYsbq9J_GZOQeFVyJCx9cSCink8gm4nStpks0ZQkj-24Q6Zfk4zNDPfpEXaXAuId9VWnwStI3DctCxpHkl6GdMkaDOqZFpl1VQMt0wVf38mtMQIi13EXtRdU0'
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
      'Authorization': 'Bearer pMwbSO7Fyky7Qt_HxcQYrvzuShTttYyTHB0o3Ja9CzHn2wCoNVYYsbq9J_GZOQeFVyJCx9cSCink8gm4nStpks0ZQkj-24Q6Zfk4zNDPfpEXaXAuId9VWnwStI3DctCxpHkl6GdMkaDOqZFpl1VQMt0wVf38mtMQIi13EXtRdU0'
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
app.get('/users', (req, res) => {
  request('iam.localoih.com/api/v1/users',bearerToken,function(error, response, body) {
    if (!error && response.statusCode ==200) {
    console.log(response);
        res.set('Content-Type', 'application/json');
        res.send(body);
    }
  })
});

app.get('/flows', (req, res) => {
  request('http://flow-repository.localoih.com/flows',function(error, response, body) {
    if (!error && response.statusCode ==200) {
      res.set("Authorization: Bearer pMwbSO7Fyky7Qt_HxcQYrvzuShTttYyTHB0o3Ja9CzHn2wCoNVYYsbq9J_GZOQeFVyJCx9cSCink8gm4nStpks0ZQkj-24Q6Zfk4zNDPfpEXaXAuId9VWnwStI3DctCxpHkl6GdMkaDOqZFpl1VQMt0wVf38mtMQIi13EXtRdU0");
     
        console.log(req.headers);
        console.log(req.get('Range'));     
    console.log(req.range()); 
        console.log(body);
    //    res.status(500).send('testing');
        res.send(body);
        res.end();
    }
  })
});
  

app.listen(port, () => {
  console.log(`Workload backend-service app listening at http://localhost:${port}`)
});