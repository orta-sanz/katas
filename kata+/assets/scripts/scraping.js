var $ = require('jquery');

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
	var saco = {};

	$(pagina).find('h4').each(function(index, cosa) {

		var pais = $(cosa).find('img').attr('alt');
		var existe = false;

		if (pais in saco) {
			saco[pais] += 1;
		}
		else {
			saco[pais] = 1;
		}
	})

	console.log(saco);
}

exports.recopila = recopila;