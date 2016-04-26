var express = require("express");
var app = express();

var PORT = 3000;
var FOLDER = __dirname + "/public/";

var middleware = {
	logger: function(req, res, next) {
		console.log(req.method + ': ' + req.originalUrl);
		next();
	}
};

app.use(middleware.logger);

app.use(express.static(FOLDER));

app.get("/*", function(req, res) {
    
    res.sendFile(FOLDER + "index.html");
});

app.listen(PORT, function() {
    
    console.log("Server is up and running! ");
    console.log("Listening on port "+PORT+" ...");
    console.log("Folder: "+FOLDER);
});

