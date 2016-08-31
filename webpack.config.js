// var fileContent = require("raw!./index.html");
// require('./index.html');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');

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
                loaders: [ 'style', 'css', 'postcss-loader', 'sass' ]
            }
	    ]
	},
    postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/html/main.html'
		}),
	]

};