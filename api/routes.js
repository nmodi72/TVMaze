var superagent = require('superagent');

module.exports = function(app) {

	app.get('/api/character/search',function(req,res){

		superagent
			.get('http://api.tvmaze.com/search/shows?q=:'+ req.query.name)
			.query({ format: 'json'})
			.end(function(err,result){
				res.json(result.body);
			})
	});

	app.get('/api/character/:id', function (req,res){

		superagent
			.get('http://api.tvmaze.com/shows/' + req.params.id + '?embed=cast')
			.query({ format: 'json'})
			.end(function(err,result){
				res.json(result.body);
			})
	})
};



