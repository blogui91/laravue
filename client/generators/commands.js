var exec = require('child_process')
	.exec;
module.exports = {
	compileComponents: function() {
		exec('cd .. && node generateComponentsPaths.js', function(err, stdout, stderr) {
			console.log(stdout);
			console.log(stderr);
		});
	}
}