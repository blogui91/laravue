var fs = require('fs');
var PATHS = require('./paths');
var beautify = require('js-beautify').js_beautify, fs = require('fs');


module.exports = {
	read: function(rl, provider_name) {
		fs.readFile('./providers/provider.template', 'utf-8', function(err, doc) {
			if (!(err)) {
				//Create file
				var find = '{{areas}}';
				var re = new RegExp(find, 'g');
				doc = doc.replace(re, provider_name);

				var dir = PATHS.providers.output;

				var provider_name_capitalized = function() {
					return provider_name.charAt(0)
						.toUpperCase() + provider_name.slice(1);
				}

				var name = provider_name_capitalized() + ".provider.js";

				doc = beautify(doc,{indent_size : 2})

				if (!fs.existsSync(dir + "/" + name)) {
					console.log("creando el archivo " + name)
					fs.writeFile(dir + "/" + name, doc, function(err) {
						if (err) {
							console.log("there was an error saving model", err);
						} else {
							console.log("Provider generated in " + PATHS.providers.output + "/" + name);
						}
					});
				} else {
					console.log("Sorry but this component has been already registered!");
				}

				rl.close();




			}



		});
	}
}