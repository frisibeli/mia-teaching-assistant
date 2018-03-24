const request = require('request');
const logObject = require('../utils/logObject');


const ACTION_NAME = 'input.playLecture';  // The action name from the API.AI intent
const PARAMETER = 'geo-city'; // An API.ai parameter name

const action = {
    actionName: ACTION_NAME,
    callback: assistant => () => {
        console.log('Handling action: ' + ACTION_NAME);
        if(assistant.getUserConfirmation()){
            assistant.tell('Okay. Playing last lecture.');
        }else{
            assistant.tell('What do you want to do?');
        }
    }
}

module.exports = action;