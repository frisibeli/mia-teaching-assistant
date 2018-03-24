const Map = require('es6-map');
const ApiAiAssistant = require('actions-on-google').DialogflowApp;

const inputUnknown = require('./input.unknown');
const inputWelcome = require('./input.welcome');
const inputPlayLecture = require('./input.playLecture');

// Add handler functions to the action router.
let actionRouter = new Map();

// The ASK_WEATHER_INTENT (askWeather) should map to the getWeather method.
let router = GARequest => {
    const assistant = new ApiAiAssistant(GARequest);
    
    actionRouter.set(inputUnknown.actionName, inputUnknown.callback(assistant));
    actionRouter.set(inputWelcome.actionName, inputWelcome.callback(assistant));
    actionRouter.set(inputPlayLecture.actionName, inputPlayLecture.callback(assistant));
    assistant.handleRequest(actionRouter);
}

module.exports = router;