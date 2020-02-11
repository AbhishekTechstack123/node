const http = require('http');
const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const hospitalRecords = require('./routes/hospitalrecords');


const hostname = "localhost";
const port = 8080;

//Sample json object
// {"name":"hospital","address":"hosaddress","pincode":"pincode"};


var app = express();

app.use(bodyParser.json());

app.use('/hospitals',hospitalRecords);
app.use('/hospitals/:id',hospitalRecords);



// app.all('/hospitals/:id',(req,res,next)=>{
// 	res.statusCode = 200;
// 	res.setHeader = ('Content-Type','text/html');
// 	next();
// });

// app.get('/hospitals/:id',(req,res,next)=>{

// 	res.end("Showing hospital records of id: "+req.params.id);
// });
// app.post('/hospitals/:id',(req,res,next)=>{
// 	res.statusCode = 405;
// 	res.end("Error 405: Method not Allowed.");
// });
// app.put('/hospitals/:id',(req,res,next)=>{
// 	res.end("Showing hospital record of hospital id:"+req.params.id+" with hospital name: "+req.body.name+" with address: "+req.body.address);
// });
// app.delete('/hospitals/:id',(req,res,next)=>{

// 	res.end("Deleting hospital record of id: "+req.params.id);
// });



app.use(express.static(__dirname + '/public'));

app.use((req,res,next)=>{

  res.statusCode = 200;
  res.setHeader = ('Content-Type','text/html');
  res.end("<html><body><h1>Response sent through express!</h1></body></html>");

});

app.listen(port,()=>{
  console.log("server running on port :"+port);
});

// const server = http.createServer(function (req, res) {
	   // console.log(req.headers);
  	// res.statusCode = 200;
  	// res.setHeader('Content-Type','text/html');
  	// res.end("<html><body><h1>Hello Kundan!</h1></body></html>");
//     console.log("The request url is "+req.url);
//     console.log("The request method is "+req.method);
//   	if(req.method == 'GET'){
//   		if(req.url == '/'){
//   			var fileurl = '/index.html';
//   		}
//   		else{
//   			var fileurl = req.url;
//   		}
//       console.log("The fileurl is :"+fileurl);
//   		var location = path.resolve('./public'+fileurl);
//   		var ext = path.extname(location);
//   		if(ext == '.html'){
//       		if(fs.existsSync(location)) {
//       				res.statusCode = 200;
//               res.setHeader('Content-Type','text/html');
//               fs.createReadStream(location).pipe(res);
//     			}
//     			else{
//     				res.statusCode = 404;
//     				res.setHeader('Content-Type','text/html');
//       			res.end("Error 404: File does not exist");
//     			 }
//   		}
//   		else{
//         res.statusCode = 404;
//         res.setHeader('Content-Type','text/html');
//         res.end("Error 404: File type not supported.");
//   		}
//   	}
//   	else{
//   		res.statusCode = 404;
//       res.setHeader('Content-Type','text/html');
//       res.end("Error 404: Method not supported.");
//   	}

// });
// server.listen(port,()=>{
// 	console.log("server running on port "+port);
// });
