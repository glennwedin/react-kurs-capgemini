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
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ["react", "env"]
			}
		}]
	}
}
