// Express
var express = require('express');
var app = express();
const bodyParser = require('body-parser');
//var axios = require('axios');
var apiURL = "https://snapmap.azurewebsites.net"; 

const cvs = require('./cloud-vision-server.js');

//access control for port for frontend
app.use(bodyParser.json(), function(req, res, next) {
	//allow multiple origins
	var allowedOrigins = [apiURL, 'http://localhost:8080', 'http://localhost:3000'];
	var origin = req.headers.origin;
  	if(allowedOrigins.indexOf(origin) > -1){
        res.header('Access-Control-Allow-Origin', origin);
  	}
    res.header("Access-Control-Allow-Credentials", 'true');
    res.header(	
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    next();
 });


// //Set up a server listener on port 8080
const server = app.listen((process.env.PORT || 8080), () => {
    const port = server.address().port;
    console.log('Node.js server running at localhost:', port);
  });  

app.post('/imgData', (req, res) => {       
    console.log("GOT request sent!");
    console.log(req);
    //cvs.retrieveResults(req);

    res.status(200).json({ "message": "Welcome to the endpoint"});
});

app.get('/', (req, res) => {       
    res.status(200).json({ "message": "Welcome to the get"});
});

app.get('/test', (req, res) => {       
    res.status(200).json({ "message": "Welcome to test"});
});
// function sendData() {
//     let body = {
//         data: "testing"
//     };
    
//     axios({
//         method: 'post',
//         url: 'https://snapmap.azurewebsites.net/imgData',//apiURL + "/snapmap",
//         data: body
//     }).then((success) => {
//         console.log('Success!');
//     }).catch((error) => {
//         console.log('Error: '+ error);
//     });
// }

// sendData();