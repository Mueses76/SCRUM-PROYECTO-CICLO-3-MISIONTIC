var mongo = require ('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";


MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("Course_search");
    var myobj = { name: "Company Inc", address: "Highway 37" };

    dbo.createCollection("usuarios", function(err, res) {
        if (err) throw err;
            console.log("Collection usuarios created!");
        }
    );
    dbo.createCollection("cursos", function(err, res) {
        if (err) throw err;
            console.log("Collection cursos created!");
        }
    );
    db.close();

});
