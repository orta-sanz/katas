var $ 			= require('jquery');

var paises = {};

function recopila (enlace) {
	$.ajax({
		type: 'GET',
		url: enlace,
		timeout: 6000,

		success: function(html) {
			almacena(html);
		},

		error: function(xmlHttpRequest, estado, error) {
			console.log('Error chungo chungo');
		}
	})
}

function almacena (pagina) {
	var paises = {};
	var banderas = {};

	$(pagina).find('h4').each(function(index, cosa) {

		var pais = $(cosa).find('img').attr('alt');
		var img = $(cosa).find('img').attr('src');

		var existe = false;

		if (pais in paises) {
			paises[pais] += 1;
		}
		else {
			paises[pais] = 1;
			banderas[pais] = img;
		}
	})

	console.log(paises);
	console.log(banderas);

	muestra(paises, banderas);
}

function muestra(paises, banderas) {
	$('body').empty();
	var plantilla = require ('../plantillas/resultado.hbs');
	$('body').flowtype({
		minimun: 500,
		maximum: 1200
	});
	$('body').append(plantilla({paises: paises},{banderas: banderas}));
}

exports.recopila = recopila;