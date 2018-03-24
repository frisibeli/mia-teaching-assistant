const request = require('request');
const logObject = require('../utils/logObject');


const ACTION_NAME = 'input.unknown';  // The action name from the API.AI intent
const PARAMETER = 'geo-city'; // An API.ai parameter name

const action = {
    actionName: ACTION_NAME,
    callback: assistant => () => {
        console.log('Handling action: ' + ACTION_NAME);
        //let city = assistant.getArgument(PARAMETER);
        let city = "Blagoevgrad";
        // Make an API call to fetch the current weather in the requested city.
        // See https://developer.yahoo.com/weather/
        let weatherRequestURL = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast" +
            "%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22" +
            encodeURIComponent(city) +
            "%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys"
        
        request(weatherRequestURL, function(error, response) {
            if(error) {
            next(error);
            } else {        
            let body = JSON.parse(response.body);
            
            let units = body.query.results.channel.units.temperature == 'F' ? 'Fahrenheit' : 'Celsius';
            let temperature = body.query.results.channel.item.condition.temp;
            
            // Respond to the user with the current temperature.
            assistant.tell('The current temperature in ' + city + ' is ' + temperature + ' degrees ' + units);
            }
        });
    }
}

module.exports = action;