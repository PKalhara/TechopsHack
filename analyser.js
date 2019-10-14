const wappalyzer = require('wappalyzer');

wappalyzer.run(['https://wappalyzer.com', '--quiet'], function(stdout, stderr) {
	if ( stdout ) {
		process.stdout.write(stdout);
	}

	if ( stderr ) {
		process.stderr.write(stderr);
	}
});