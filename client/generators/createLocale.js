var fs = require('fs');
var PATHS = require('./paths');

function camel2snake(str) {
	const reg = /(?=[A-Z])/g;
	return str.replace(reg, '_')
		.toLowerCase();

}

function camel2kebab(str) {
	const reg = /(?=[A-Z])/g;
	return str.replace(reg, '-')
		.toLowerCase();
}

function kebab2snake(str) {
	const reg = /-/g;
	return str.replace(reg, '_')
		.toLowerCase();
}
module.exports = {
	read: function(rl, component_name) {
		fs.readFile('./locales/locales.template', 'utf-8', function(err, doc) {
			if (!(err)) {
				//Create file


				var dir = PATHS.components.output + "/" + component_name + "/";
				var name = "locales.js";

				component_name = kebab2snake(component_name)
				var find = '{{component_name}}';
				var re = new RegExp(find, 'g');
				doc = doc.replace(re, component_name);

				if (!fs.existsSync(dir)) {
					console.log("This component is not registed");
					rl.close();
					return;
				}
				if (!fs.existsSync(dir + name)) {
					console.log("creando el archivo " + dir + name)
					fs.writeFile(dir + name, doc, function(err) {
						if (err) {
							console.log("there was an error saving files", err);
						} else {
							console.log(component_name + " has been generated in " + PATHS.components.output + "/" + component_name + "/locales.js");
						}
						//rl.close();
					});
				} else {
					console.log("Sorry but locales has been already registered for this component!");
					//rl.clo/se();

				}

				rl.close();




			}



		});
	}
}