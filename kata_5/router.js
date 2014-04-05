var manipuladorPeticion = require('./manipuladorPeticion');
var manejador = {'/registrar': manipuladorPeticion.registrar};

function route(path) {
	console.log('Nos vamos a: ' + path);
	manejador[path];
}

exports.route = route;