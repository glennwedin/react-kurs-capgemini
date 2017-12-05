var webpack = require('webpack');

module.exports = {
	entry: [
		"./src/index.js",
	],
	output: {
		path: __dirname + "/dist",
		filename: "app.js"
	},
	module: {
		loaders: [{
			test: /\.scss$/,
			use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
		}, {
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ["react", "env"]
			}
		}]
	}
}
