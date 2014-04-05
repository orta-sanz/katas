function route(path, manejador) {
	console.log('Nos vamos a: ' + path);
	manejador[path]();
}

exports.route = route;