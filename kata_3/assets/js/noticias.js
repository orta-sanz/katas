var $ = require('jquery');

module.export = $(document).ready(function() {
	var datos;
	var plantilla = require('../plantillas/plantilla_noticias.hbs');

	function onTodoListo() {
		$('body').append(plantilla({noticia: datos}));
	}

	$.ajax({
		dataType: 'json',
		url: 'http://www.oxik.net/proyectos/appAlmonteAvanza/www/api/noticias',
		success: function(data) {
			console.log('cargado json');
			datos = data;
			plantilla && onTodoListo();
			console.log(data);
		}
	})
});