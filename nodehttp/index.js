const http = require('http');
const fs = require('fs');
const path =require('path');

const hostname = "localhost";
const port = 8000;

const server = http.createServer(function (req, res) {
	// console.log(req.headers);
  	console.log("The request url is "+req.url);
  	console.log("The request method is "+req.method);
  	// res.statusCode = 200;
  	// res.setHeader('Content-Type','text/html');
  	// res.end("<html><body><h1>Hello Kundan!</h1></body></html>");
  	if(req.method == 'GET'){
  		if(req.url == '/'){
  			var fileurl = '/index.html';
  		}
  		else{
  			var fileurl = req.url;
  		}
  		var location = path.resolve('./public'+fileurl);
  		var ext = path.extname(location);
  		if(ext == '.html'){
  			if (fs.existsSync(location)) {
  				console.log('The file exists.');
			}
			else{
				res.statusCode = 404;
				res.setHeader('Content-Type','text/html');
  				res.end("File does not exist");
				// console.log("file does not exist");
			}
  		}
  		else{

  		}
  		



  	}
  	else{
  		//not a GET request
  	}

});
server.listen(port,()=>{
	// console.log(`server running on port ${port}`);
	console.log("server running on port "+port);
});