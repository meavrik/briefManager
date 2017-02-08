var express = require("express");
var mongo = require("mongoose");
var cors = require("cors");

mongo.connect('mongodb://localhost/peoples')

var personSchema = {
    id: String,
    name: String,
    phone: String
}
let person = mongo.model('person', personSchema, 'clients')

let app = express();
app.use(cors());
var arr = [];
app.get('/', function(req, res) {
    person.find({}, {}, { limit: 20 }, function(err, doc) {
        res.send(doc);
    });
    // res.send("Hello world!!");
})

app.listen(27017);