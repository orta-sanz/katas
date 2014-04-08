var $			= require('jquery');
var scraping 	= require('./scraping');

function comprueba(enlace) {
	if (enlace.split('/')[0] != 'http:') {
		enlace = 'http://' + enlace;
	}

	$.ajax({
		type: 'GET',
		url: enlace,
		timeout: 6000,

		success: function() {
			console.log('La pagina responde');
			busca_watchers(enlace);
		},

		error: function(xmlHttpRequest, estado, error) {
			console.log('La pagina no responde');
			if (estado === 'timeout') {
				console.log('Timeout en respuesta');
			}
			$('#advert').css('visibility', 'visible');
		}
	})
};

function busca_watchers(enlace) {
	enlace += '/watchers';
	$.ajax({
		type: 'GET',
		url: enlace,
		timeout: 6000,

		success: function() {
			console.log('Se ha encontrado la pagina watchers');
			//console.log(html);
			scraping.recopila(enlace);
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

exports.comprueba = comprueba;