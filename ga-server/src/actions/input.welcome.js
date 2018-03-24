const request = require('request');
const logObject = require('../utils/logObject');


const ACTION_NAME = 'input.welcome';  // The action name from the API.AI intent
const PARAMETER = 'geo-city'; // An API.ai parameter name

const action = {
    actionName: ACTION_NAME,
    callback: assistant => () => {
        console.log('Handling action: ' + ACTION_NAME);
        assistant.askForConfirmation('Do you want to start with a recap of the last lecture?');
    }
}

module.exports = action;