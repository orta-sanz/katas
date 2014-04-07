var testUrl = require ('./test_url');
var $		= require ('jquery');

 $(document).ready(function (){
 	$('.submit_b').bind('click', function () {
 		testUrl.comprueba($('.url').val());
 	});
 });