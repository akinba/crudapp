'use strict';

module.exports = (app, db)=> {
	app.get('/table/:name',(req,res)=>{
		const table = req.params.name;
		db.bins.findAll()
		.then(table =>{
			res.json(table);
		});
	});
};