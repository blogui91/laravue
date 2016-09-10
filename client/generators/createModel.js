var fs = require('fs');
var PATHS = require('./paths');
var CreateAttributes = require('./models/createAttributes.js');
var CreateSetGetters = require('./models/createSetGetters.js');

module.exports = {
	read: function(rl, model_name, attrs) {
		fs.readFile('./models/model.template', 'utf-8', function(err, doc) {
			if (!(err)) {
				//Create file
				var find = '{{Model}}';
				var re = new RegExp(find, 'g');
				doc = doc.replace(re, model_name);

				var _attrs = CreateAttributes.create(attrs);
				var find = '{{attributes}}';
				var re = new RegExp(find, 'g');
				doc = doc.replace(re, _attrs);

				var setgetters = CreateSetGetters.create(attrs);
				var find = '{{setgetters}}';
				var re = new RegExp(find, 'g');
				doc = doc.replace(re, setgetters);

				var dir = PATHS.models.output;


				var model_name_capitalized = function() {
					return model_name.charAt(0)
						.toUpperCase() + model_name.slice(1);
				}

				var name = model_name_capitalized() + ".model.js";

				if (!fs.existsSync(dir + "/" + name)) {
					console.log("creando el archivo " + name)
					fs.writeFile(dir + "/" + name, doc, function(err) {
						if (err) {
							console.log("there was an error saving model", err);
						} else {
							console.log("Model generated in " + PATHS.components.output + "/" + name);
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