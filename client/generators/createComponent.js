var fs = require('fs');
var PATHS = require('./paths');
var Command = require('./commands.js');
module.exports = {
	read: function(rl, component_name) {
		fs.readFile('./components/component.template', 'utf-8', function(err, doc) {
			if (!(err)) {
				//Create file
				var find = '{{new-element}}';
				var re = new RegExp(find, 'g');
				doc = doc.replace(re, component_name);

				var dir = PATHS.components.output + "/" + component_name + "/";
				var name = component_name + ".vue";

				if (!fs.existsSync(dir)) {
					fs.mkdirSync(dir);
				}
				if (!fs.existsSync(dir + name)) {
					console.log("creando el archivo " + dir + name)
					fs.writeFile(dir + name, doc, function(err) {
						if (err) {
							console.log("there was an error saving files", err);
						} else {
							console.log(component_name + " has been generated in " + PATHS.components.output + "/" + component_name + "/" + component_name);
						}
						//rl.close();
					});
				} else {
					console.log("Sorry but this component has been already registered!");
					//rl.clo/se();

				}

				rl.close();
				Command.compileComponents();



			}



		});
	}
}