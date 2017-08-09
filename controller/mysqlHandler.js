//database configuration for MYSQL
var mysql = require('mysql');
var vacationsql = require('../models/vacationSQL.js');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'samp_db'
});

connection.connect();

//Create
connection.query(vacationsql.create, function(error, results, fields){
    if(error) throw error;
    console.log('create vacations table: ', results);
});

//Insert
connection.query(vacationsql.insert2, function(error, results, fields){
    if(error) throw error;
    console.log('insert: ', results);
});

//Insert
connection.query(vacationsql.insert3, function(error, results, fields){
    if(error) throw error;
    console.log('insert: ', results);
});

exports.list = function(req, res){
    connection.query(vacationsql.selectByAvailable, 1, function(error, results, fields){
        if(error) throw error;
        console.log('selectByAvailable: ', results);
        var currency = req.session.currency || 'USD';
        var context = {
            currency: currency,
            vacations: results.map(function(vacation){
                return {
                    sku: vacation.sku,
                    name: vacation.name,
                    description: vacation.description,
                    inSeason: vacation.inSeason?true:false,
                    price: convertFromUSD(vacation.priceInCents/100, currency),               
                };
            })
        };

        switch(currency){
	    	case 'USD': context.currencyUSD = 'selected'; break;
	        case 'GBP': context.currencyGBP = 'selected'; break;
	        case 'BTC': context.currencyBTC = 'selected'; break;
	    }
        res.render('vacations', context);
    });
};

connection.end();