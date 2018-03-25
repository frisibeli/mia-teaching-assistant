require('dotenv').config();
const express = require('express');
const axios = require('axios').default;
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const GAActionHandler = require('./src/actions')
const logObject = require('./src/utils/logObject');
const ES_URL = "https://search-maria-brain-es-pc5buofzzy44zw77cjn5yjz4ae.eu-central-1.es.amazonaws.com";

// Join an array of strings into a sentence
// https://github.com/epeli/underscore.string#tosentencearray-delimiter-lastdelimiter--string
const toSentence = require('underscore.string/toSentence');

app.use(bodyParser.json({type: 'application/json'}));
app.use(cors());
app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// Uncomment the below function to check the authenticity of the API.AI requests.
// See https://docs.api.ai/docs/webhook#section-authentication
/*app.post('/', function(req, res, next) {
  // Instantiate a new API.AI assistant object.
  const assistant = new ApiAiAssistant({request: req, response: res});
  
  // Throw an error if the request is not valid.
  if(assistant.isRequestFromApiAi(process.env.API_AI_SECRET_HEADER_KEY, 
                                  process.env.API_AI_SECRET_HEADER_VALUE)) {
    next();
  } else {
    console.log('Request failed validation - req.headers:', JSON.stringify(req.headers, null, 2));
    
    res.status(400).send('Invalid request');
  }
});*/
app.get('/document', (req, res, next) => {
  axios.get(`${ES_URL}/documents/_doc/_search`).then(response => {
    res.json(response.data.hits.hits.map(hit => hit._source));
  })
})
app.post('/document', (req, res, next) => {
  const {body} = req;
  if("title" in body && "content" in body && "topic" in body){
    axios.post(`${ES_URL}/documents/_doc`, Object.assign({}, body, {type:"full_document"}))
    .then(response => {
      res.status(201).json({success:true});
    }).catch(error => {
      res.status(400).json({success:fail, error});
    })
  }else{
    res.status(400).json({success:false, error:"Provide title, content and topic"});
  }
})
// Handle webhook requests
app.post('/', function(req, res, next) {
  logObject('Request headers: ', req.headers);
  logObject('Request body: ', req.body);
  GAActionHandler({request: req, response: res})
  // Instantiate a new API.AI assistant object.
  // Route requests to the proper handler functions via the action router.
});

// Handle errors.
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

// Listen for requests.
let server = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + server.address().port);
});

