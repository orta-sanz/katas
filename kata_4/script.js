var request = require('request');
var cheerio = require('cheerio');

var url = 'http://tympanus.net/codrops/collective/collective-108';

request(url, function (error, response, html) {
	if (!error && response.statusCode == 200) {

		var $ = cheerio.load(html);
		var saco = {};

		$('.ct-coll-item').find('article').each(function(index, cosa) {
			if (index > 0) {
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