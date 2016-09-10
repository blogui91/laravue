var readline = require('readline');

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});


var modelGenerator = require('./createModel.js');
var providerGenerator = require('./createProvider.js');
var componentGenerator = require('./createComponent.js');
var localeGenerator = require('./createLocale.js');


rl.question("What do you want to create \n 1. Model. \n 2. Provider \n 3. Component \n 4. Locale:\n(answer): ", function(answer) {
	if (!(answer)) {
		rl.close();
	} else {
		answer = parseInt(answer)
		switch (answer) {
			case 1:
				rl.question("What is the name of your Model: ", function(model_name) {
					if (!model_name) rl.close();
					else {
						rl.question("fields (separated by comma): ", function(attrs) {
							modelGenerator.read(rl, model_name, attrs);
						});
					}
				});
				break;
			case 2:
				rl.question("What is the name of your Provider: ", function(provider_name) {
					if (!provider_name) rl.close();
					else {
						providerGenerator.read(rl, provider_name);
					}
				});
				break;
			case 3:
				rl.question("What is the name of your component? (my-component) ", function(answer) {
					if (!(answer)) {
						rl.close();
					} else {
						componentGenerator.read(rl, answer);
					}
				});
				break;
			case 4:
				rl.question("Which of your components needs Locale? (which already exists) ", function(answer) {
					if (!(answer)) {
						rl.close();
					} else {
						localeGenerator.read(rl, answer);
					}
				});
				break;
			default:
				rl.close();
		}
	}
});