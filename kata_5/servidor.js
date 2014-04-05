var http = require('http');
var url = require ('url');

function iniciar(route, manejador) {
	function servidor(peticion, respuesta) {

		var ruta = url.parse(peticion.url).pathname;
		console.log('Petición realizada para ' + ruta);

		route(manejador, ruta);
		//console.log('Este es el manejador que tenemos: ' + manejador);

		respuesta.writeHead(200, {'Content-Type': 'text/html'});
		respuesta.write('Hola babuchas');
		respuesta.end();
	}

	http.createServer(servidor).listen(8888);
	console.log('Se ha iniciado el servidor');
}

exports.iniciar = iniciar;