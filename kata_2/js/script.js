$(document).ready(function() {
	var datos;
	var plantilla;

	function onTodoListo() {
		var template = Handlebars.compile(plantilla);
		for (var i in datos) {
			$('body').append(template(datos[i]));
		}
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

	$.ajax({
		url: 'js/assets/plantilla.html',
		success: function(plt) {
			console.log('carga la plantilla');
			plantilla = plt;
			datos && onTodoListo();
		}
	})
});