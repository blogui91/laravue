const elixir = require('laravel-elixir');
var exec = require('child_process')
	.exec;

// Just making paths a little shorter
var assets_path = './resources/assets'

require('laravel-elixir-webpack-ex');

//Create a task to make build of our vue app 
elixir.extend('buildVueProject', function(mix, projectName, entryPath, configPath) {
	var project = {}
	project[projectName] = entryPath
	mix.webpack(project, require(configPath), elixir.config.publicPath);
});


//If we need to import packag
var root = '../../../';
console.log(elixir.config.assetsPath);
elixir(function(mix) {
	mix.scripts([
		// Combine all js files into one.
		// Path is relative to resource/js folder.
		root + 'bower_components/jquery/dist/jquery.min.js',
		root + 'node_modules/materialize-css/bin/materialize.js',
	], 'public/js/vendor.js');

	mix.copy('node_modules/materialize-css/fonts', 'public/fonts'); //Copy our fonts
	mix.babel('app.js');
});

elixir(function(mix) {
	if (elixir.config.production) {

		mix.sass('app.scss')
			.buildVueProject(
				mix,
				'vue-app',
				'../../../client/src/main.js', //By default elixir searches in js that's why we had to use '..' considering 
				'./client/build/webpack.prod.conf.js'
		);

		//Save generated files in public folder
		mix.version([
			'public/css/vue-app.css',
			'public/js/vue-app.js'
		]);

	} else {
		// Use browswersync 
		mix.sass('app.scss')
			.browserSync({
				proxy: false,
				logConnections: true,
				reloadOnRestart: true,
				notify: true
			})
	}
});