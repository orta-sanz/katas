var server 				= require('./servidor');
var router 				= require('./router');
var requestHandlers		= require('./manipuladorPeticion');

var manejador = {'/': requestHandlers.iniciar, '/registrar': requestHandlers.registrar};

server.iniciar(router.route, manejador);