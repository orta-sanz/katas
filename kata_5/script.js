var server 				= require('./servidor');
var router 				= require('./router');
var requestHandlers		= require('./requestHandlers');

var manejador = {};
manejador['/'] 				= requestHandlers.iniciar;
manejador['/registrar'] 	= requestHandlers.registrar;
manejador['/listado']		= requestHandlers.listado;

server.iniciar(router.route, manejador);