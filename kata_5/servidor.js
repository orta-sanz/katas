var http 		= require('http');
var url 		= require ('url');

function iniciar(route, manejador) {
	function servidor(peticion, respuesta) {

		var datosRecibidos = '';
		var ruta = url.parse(peticion.url).pathname;

		peticion.setEncoding('utf8');

		peticion.addListener('data', function(trozoRecibido) {
			datosRecibidos += trozoRecibido;
		});

		peticion.addListener('end', function() {
			route(ruta, manejador, respuesta, datosRecibidos);
		})
	}
	http.createServer(servidor).listen(8888);
	console.log('Se ha iniciado el servidor');
}

exports.iniciar = iniciar;