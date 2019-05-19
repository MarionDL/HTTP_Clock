/**
 * Author : Marion Dutu Launay
 * Server.js
 * This server is used to get the current time. A client can change
 * its value.
*/

const express = require('express');
const app = express();
const xml = require('xml');
const bodyParser = require('body-parser');
let time = "00:00";

app.use(bodyParser.json());

app.listen(8080, function () {console.log("App listening on port 8080")});

// Quand le server reçoit des requêtes 'GET'
app.get('/', function (req, res) {
    const format = req.query.format;
    console.log("Asked format:", format);
    switch (format) {
        case "xml":
            res.set('Content-Type', 'text/xml').send(xml({hour:time}));
            break;
        case "json":
            res.set('Content-Type', 'text/json').send({hour:time});
            break;
        case "html":
            res.set('Content-Type', 'text/html').send(time);
            break;
    }
});

// Quand le server reçoit des requêtes 'POST'
app.post('/', function (req, res) {
    time = req.body.new_time;
    console.log("Time changed successfully! New time:", time);
    res.send("Asked for changing time");
});