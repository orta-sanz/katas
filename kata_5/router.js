function route(path, manejador, respuesta, datosRecibidos) {
	if (typeof manejador[path] === 'function') {
		manejador[path](respuesta, datosRecibidos);
	}
	else {
		console.log('Ups! 404 chaval');
		respuesta.writeHead(404, {"Content-Type": "text/html"});
		respuesta.write("404 Not found");
		respuesta.end();
	}
}

exports.route = route;