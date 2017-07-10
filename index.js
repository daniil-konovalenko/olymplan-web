var express = require('express'),
	app = express(),
    http = require('http').Server(app);

http.listen(process.env.PORT, function() {
	console.log("Server has started at port " + process.env.PORT);

    app.get("*", (req, res) => {
        res.send("<h1>Hi, world!</h1><br> Url: " + req.url);
    });
});
