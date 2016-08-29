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
        	'./js',
        	'./sass/main.sass'
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
			template: 'html/main.html'
		}),
	]

};