var $	= require('jquery');

function comprueba(enlace) {
	$.ajax({
		type: 'GET',
		url: enlace,
		timeout: 3000,

		success: function() {
			console.log('La pagina responde');
		},

		error: function(xmlHttpRequest, estado, error) {
			console.log('La pagina no responde');
			if (estado === 'timeout') {
				console.log('Timeout en respuesta');
			}
		}
	})
}

exports.comprueba = comprueba;