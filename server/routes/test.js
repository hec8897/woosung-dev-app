const express = require('express');
const request = require('request');
const convert = require('xml-js');
const router = express.Router();

/* GET home page. */
router.get('/class', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  const apiKey = '20208820d5c0f21c50d7c214b02edb14e765';

  const url = 'http://ncpms.rda.go.kr/npmsAPI/service';
  request({
    url: url,
    method : 'POST',
    form:{
        apiKey,
        serviceCode:'SVC11',
        serviceType:'AA001',
    }

  }, function(error, response, body){
    // console.log('Status', response.statusCode);
    // console.log('Headers', JSON.stringify(response.headers));
    // console.log('Response Received', body);
    const xmlToJson = convert.xml2json( body, {compact: true, spaces: 4});

    res.send(xmlToJson)
    // res.send(body)

  });
});

router.post('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  const apiKey = '20208820d5c0f21c50d7c214b02edb14e765';

  const url = 'http://ncpms.rda.go.kr/npmsAPI/service';
  const cropName = req.body.crop
  request({
    url: url,
    method : 'POST',
    form:{
        apiKey,
        serviceCode:'SVC12',
        serviceType:'AA001',
    }

  }, function(error, response, body){
    // console.log('Status', response.statusCode);
    // console.log('Headers', JSON.stringify(response.headers));
    // console.log('Response Received', body);
    const xmlToJson = convert.xml2json( body, {compact: true, spaces: 4});

    res.send(xmlToJson)
    // res.send(body)

  });
});


module.exports = router;