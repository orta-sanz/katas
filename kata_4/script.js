// Ejecución: node script.js

var request = require('request');
var cheerio = require('cheerio');

var url = 'http://tympanus.net/codrops/collective/collective-108';

// Con request de la URL creamos una función con parametros de error, response y el propio HTML
request(url, function (error, response, html) {
	//Si no hay errores y la página está cargada totalmente, entramos
	if (!error && response.statusCode == 200) {

		var $ = cheerio.load(html); //En la variable $ cargamos el arbol DOM de la pagina generado por Cheerio
		var saco = {};

		// Por cada elemento que encontramos ejecutamos una función con el indice y el propio objeto
		$('.ct-coll-item').find('article').each(function(index, cosa) {
			if (index > 0) {
				//Hacemos lo que nos sale del nabo con el objeto
				saco[index] = {'nombre': $(cosa).find('h2').text(), 'vinculo': $(cosa).find('.ct-coll-link').attr('href')}
			}
		})
		
		for(var i in saco) {
			if (saco[i].vinculo != null) {
				console.log(saco[i].nombre + ' : ' + saco[i].vinculo);
			}
		}
	}
})