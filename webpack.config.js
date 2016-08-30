// var fileContent = require("raw!./index.html");
// require('./index.html');
var HtmlWebpackPlugin = require('html-webpack-plugin');

// require('!style!css!sass!./sass/main.sass');

function getEntrySources(sources) {
	if (process.env.NODE_ENV !== 'production') {
		sources.push('webpack-dev-server/client?http://localhost:8080');
	}
	return sources;
}

module.exports = {
    entry: {
        js: getEntrySources([
        	'./src/js',
        	'./src/sass/main.sass'
        ])
    },
    output: {
        filename: 'public/myScript.js'
    },
    module: {
    loaders: [
	    	{
                test: /\.sass$/,
                loaders: [ 'style', 'css', 'sass' ]
            }
	    ]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/html/main.html'
		}),
	]

};