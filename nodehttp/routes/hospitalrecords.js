const express = require('express');
const bodyParser = require('body-parser');



const hospitalRouter = express.Router();

hospitalRouter.use(bodyParser.json());

hospitalRouter.route('/').all((req,res,next)=>{

	res.statusCode = 200;
	res.setHeader = ('Content-Type','text/html');
	next();

}).get((req,res,next)=>{

	res.end("Showing all hospital records");

}).post((req,res,next)=>{

	res.end("Showing hospital record of "+req.body.name+" with address: "+req.body.address);
}).put((req,res,next)=>{

	res.statusCode = 405;
	res.end("Error 405: Method not Allowed.");

}).delete((req,res,next)=>{

	res.end("Deleting all hospital records");

});

module.exports = hospitalRouter;