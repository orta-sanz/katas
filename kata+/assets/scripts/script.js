var $ 	= require('jquery');

$(document).ready(function() {
	var trozos_enlace = ['http:','www.indiedb.com','games'];
	$('#boton1').bind('click', function() {
		var enlace = $('#url').val();
		console.log(enlace.split('/'));
	});
});