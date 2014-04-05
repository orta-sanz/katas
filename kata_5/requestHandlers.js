var querystring = require('querystring');
var fs			= require('fs');

var fichero = fs.createWriteStream('log_nombres.txt');

function iniciar(respuesta, datosRecibidos) {
	var body =  '<html>'+
				'<head>'+
				'<meta http-equiv="Content-Type" content="text/html" charset=UTF-8" />'+
				'</head>'+
				'<body>'+
				'<form action="/registrar" method="post">'+
				'<p>Introduzca su nombre para registrarlo</p></br>'+
					'<input type="text" name="texto"/>'+
					'<input type="submit" value="Registrar" />'+
				'</form>'+
				'</br><a href="/listado">Listado de personajes</a>'+
				'</body>'+
				'</html>';
	respuesta.writeHead(200, {"Content-Type": "text/html"});
	respuesta.write(body);
	respuesta.end();
}

function registrar(respuesta, datosRecibidos) {
	var nombre = datosRecibidos.slice(6);
	if (nombre.length > 12) {
		console.log('Nombre demasiado largo chato');
		respuesta.statusCode = 302; 
		respuesta.setHeader("Location", "/");
		respuesta.end();
	}
	else {
		respuesta.writeHead(200, {"Content-Type": "text/html"});
		fichero.write(nombre + '\n');
		respuesta.write('Hola ' + nombre +
						'</br></br><a href="/">Volver al inicio</a>');
		respuesta.end();
	}
}

function listado(respuesta, datosRecibidos) {
	var body = fichero.readFile();
	console.log(body);
	respuesta.writeHead(200, {"Content-Type": "text/html"});
	respuesta.write(body);
	respuesta.end();
}

exports.registrar 	= registrar;
exports.iniciar 	= iniciar;
exports.listado 	= listado;