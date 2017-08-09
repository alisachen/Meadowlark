var vacationSQL = {
    create: 'create table vacations ( '+
                'id int auto_increment primary key,' + 
                'name tinytext, '+
                'slug tinytext, '+
                'category tinytext,'+
                'sku tinytext,'+
                'description tinytext, '+
                'priceInCents tinytext, '+
                'tags tinytext, '+
                'inSeason tinyint(1),'+
                'available tinyint(1),'+
                'requiresWaiver tinyint(1),'+
                'maximumGuests tinyint(1),'+
                'notes tinytext,'+
                'packagesSold tinyint(1))',
    insert: 'insert into vacations values('+
                '"Hood River Day Trip",'+
                '"hood-river-day-trip", '+
                '"Day Trip", '+
                '"HR199", '+
                '"Spend a day sailing on the Columbia and enjoying craft beers in Hood River!",'+
                '9995,'+
                '"[day trip, hood river, sailing, windsurfing, breweries]",'+
                '1,'+
                '1,'+
                '0,'+
                '16,'+
                '"notes  in insert",'+
                '0)',
    insert2: 'insert into vacations values('+
                '"Oregon Coast Getaway",'+
                '"oregon-coast-getaway", '+
                '"Weekend Getaway", '+
                '"OC39", '+
                '"Enjoy the ocean air and quaint coastal towns!",'+
                '269995,'+
                '"[weekend getaway, oregon coast, beachcombing]",'+
                '0,'+
                '1,'+
                '0,'+
                '8,'+
                '"notes in insert2",'+
                '0)',
    insert3: 'insert into vacations values('+
                '"Rock Climbing in Bend",'+
                '"rock-climbing-in-bend", '+
                '"Adventure", '+
                '"B99", '+
                '"Experience the thrill of rock climbing in the high desert.",'+
                '289995,'+
                '"[weekend getaway, bend, high desert, rock climbing, hiking, skiing]",'+
                '1,'+
                '0,'+
                '1,'+
                '4,'+
                '"The tour guide is currently recovering from a skiing accident.",'+
                '0)',
    selectByAvailable: 'select * from vacations where available=?',
}

module.exports = vacationSQL;