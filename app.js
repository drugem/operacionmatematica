/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

var bodyParser = require('body-parser');

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');
var cors = require('cors');


// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

// create a new express server
var app = express();

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

app.use(cors());

//Esta es la sentencia que expone la operación matemática
//cambiar /operacion por algo que denote la operacion a implementar (ej. /sumar)
//Escribir en res.json lo siguiente:
//res.json({resultado:[operacion matematica]})
//Sustituya [operacion matematica] por la operacion que su grupo debe realizar
//Sugerencia: Los valores a operar estan en req.body.valor1 y req.body.valor2
//Sugerencia 2: Para que la app tome los valores como números y no como cadenas de texto, utilice la función Number(x), siendo x la variable que 
//se desea convertir a número
app.post('/operacion',cors(),function(req,res){
  res.json({resultado:""/*reemplazar las "" por lo indicado en las instrucciones*/});
});

// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});
