var $		= require('jquery');
//var require = require('request');

function comprueba(enlace) {
	// Le echamos un cable al usuario
	enlace = ayuda(enlace);

	$.ajax({
		type: 'GET',
		url: enlace,
		timeout: 6000,

		success: function() {
			console.log('La pagina responde');
			console.log(enlace);
		},

		error: function(xmlHttpRequest, estado, error) {
			console.log('La pagina no responde');
			if (estado === 'timeout') {
				console.log('Timeout en respuesta');
			}
			$('#advert').css('visibility', 'visible');
		}
	})
}

function ayuda(url) {
	var tmp = url;
	if (url.split('/')[0] != 'http:') {
		tmp = 'http://' + tmp;
	}

	if (url.split('/')[5] != 'watchers') {
		tmp = tmp + '/watchers';
	}

	return tmp;
}

exports.comprueba = comprueba;