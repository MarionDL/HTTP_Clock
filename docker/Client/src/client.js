/**
 * Author : Marion Dutu Launay
 * Client.js
 * With this app, the user can either ask for the current time or 
 * change the server's time.
*/

const fetch = require('node-fetch');
const usr_time = process.argv[3] || "00:00";
const body = {new_time: usr_time};
const usr_format = process.argv[2] || "json";

switch (process.argv.length) {
   case 3:
     // Demande de l'heure avec le format demandé
     fetch('http://192.168.99.100:8080?format='+usr_format)
     .then((response)=> response.text())
     .then(body => console.log(body))
     .catch(e => console.log(e));
     break;
   case 4:
     // Modifier l'heure
     fetch('http://192.168.99.100:8080', {
        method: 'post',
        body: JSON.stringify(body),
        headers: {'Content-Type': 'application/json'},
     })
     .then((response)=> response.text())
     .then(json => console.log(json))
     .catch(e => console.log(e));
     break;
}