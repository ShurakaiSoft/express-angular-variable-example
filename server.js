/**
 * Express server for testing different methods to pass JavaScript variables,
 * from the server to the client, in this case AngularJS.
 *
 */

// dependencies

var express = require('express'),

	data = require('./server/model');


var server = express();

// configuration
server.set('port', process.env.PORT || 3127);
server.set('views', __dirname + '/server/views');
server.set('view engine', 'jade');


// middleware
server.use(server.router);
server.use(express.static(__dirname + '/client'));


// routes
server.get('/api/users', function (req, res) {
	res.json(data.users);
});
server.get('/:name', function (req, res) {
	res.render(req.params.name, { users: data.users });
});
server.get('/', function (req, res) {
	res.render('javascript-global', { users: data.users });
});


// start server
server.listen(server.get('port'), function (err) {
	if (err) {
		console.log("Error:", err);
	} else {
		console.log("Server listening on:", server.get('port'));
	}
});
