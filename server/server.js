// require express - gives us a function

const express = require('express');

// create an instance of express by calling function above - returns an object
        // express is like a car. you don't need to know how it works, just push the gas and it goes
const app = express();
const port = 5000;

// express static file serving. make sure there's an index.html file in there. this one line basically creates the server
app.use(express.static('server/public'));



app.get('/cohorts', function(req, res){
    console.log('hello from /cohorts!');
    // every single express route has to send back a response
    // can also do functions, arrays, whatever
    // but data should not live in our server file. go into modules folder new file cohorts for example cohorts.js
    let nagle = findNagle(cohortNames);
    res.send(cohortNames);
})

function findNagle(arrayParam){
    for (let i=0; i<arrayParam.length; i++){
        if (arrayParam[i] == 'Nagle'){
            return arrayParam[i]
        }
    }
}

// start up our server
app.listen(port, () => {
    console.log('listening on port: ', port);
    
})