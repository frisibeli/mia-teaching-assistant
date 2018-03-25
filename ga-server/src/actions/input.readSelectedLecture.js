const request = require('request');
const logObject = require('../utils/logObject');
const axios = require('axios').default;

const ACTION_NAME = 'input.readSelectedLecture';  // The action name from the API.AI intent
const PARAMETER = 'topic'; // An API.ai parameter name
const ES_URL = "https://search-maria-brain-es-pc5buofzzy44zw77cjn5yjz4ae.eu-central-1.es.amazonaws.com";

const action = {
    actionName: ACTION_NAME,
    callback: assistant => () => {
        console.log('Handling action: ' + ACTION_NAME);
        let topic = assistant.getArgument(PARAMETER);
        let document = null;
        axios.post(`${ES_URL}/_search`, {"query": {
                "match" : {
                    "topic":{
                        "query":topic
                    }
                }
            }
        }).then(result => {
            if(result.data.hits.hits.length > 0){
                console.log(result.data.hits.hits[0]);
                document = result.data.hits.hits[0]._source;
                assistant.tell(`Okay. Playing last lecture about ${topic}. ${document.title}, ${document.content}`);
            }else{
                assistant.tell(`Oops! There are no lectures about ${topic}`);
            }
        })
        
    }
}

module.exports = action;