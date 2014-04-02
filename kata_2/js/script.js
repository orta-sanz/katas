$(document).ready(function() {
	var datos;
	var plantilla;

	function onTodoListo() {
		var template = Handlebars.compile(plantilla);
		$('body').append(template(datos[0]));
	}

	$.ajax({
		dataType: 'json',
		url: 'http://www.oxik.net/proyectos/appAlmonteAvanza/www/api/noticias'
		success: function(data) {
			console.log('cargado json');
			datos = data;
			plantilla && onTodoListo();
		},
	})

	$.ajax({
		url: 'js/assets/plantilla.html'
		success: function(plt) {
			console.log('carga la plantilla');
			plantilla = plt;
			datos && onTodoListo();
		},
	})
});