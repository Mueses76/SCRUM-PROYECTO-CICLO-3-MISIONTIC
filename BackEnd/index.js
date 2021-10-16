let moongoose = require('mongoose');
let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');
let user = require('./dataBase');

moongoose.Promise = global.Promise;
moongoose.connect(
    user.principal, 
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).
then(
    () => console.log('Conectado a la base de datos'),
    err => console.log(err)
);

const app = express();

const ruta = require('./routes/rutasUsuarios');
app.use('',ruta);













const server = app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


/*var mongo = require ('mongodb');
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
*/