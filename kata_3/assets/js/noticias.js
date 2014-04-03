var $ = require('jquery');
var Handlebars = require('handlebars');

module.export = $(document).ready(function() {
	var datos;
	var plantilla = require('../plantillas/plantilla_noticias.hbs');

	function onTodoListo() {
		//var template = Handlebars.compile(plantilla);
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

	mensajito('mola');

	/*$.ajax({
		url: 'plantilla/plantilla_maxima.js',
		success: function(plt) {
			console.log('carga la plantilla');
			plantilla = plt;
			datos && onTodoListo();
		}
	})*/
});