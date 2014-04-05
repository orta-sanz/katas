function iniciar(respuesta) {
	var body =  '<html>'+
				'<head>'+
				'<meta http-equiv="Content-Type" content="text/html" charset=UTF-8" />'+
				'</head>'+
				'<body>'+
				'<form action="/registrar" method="post">'+
					'<input type="text" name="texto"/>'+
					'<input type="submit" value="Registrar" />'+
				'</form>'+
				'</body>'+
				'</html>';
	respuesta.writeHead(200, {"Content-Type": "text/html"});
	respuesta.write(body);
	respuesta.end();
}

function registrar(respuesta) {
	respuesta.writeHead(200, {"Content-Type": "text/html"});
	respuesta.write("Hola Subir");
	respuesta.end();
}

exports.registrar = registrar;
exports.iniciar = iniciar;
exports.favicon = favicon;