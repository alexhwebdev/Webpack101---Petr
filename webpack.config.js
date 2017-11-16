// 	webpack ./src/app.js ./dist/app.bundle.js -p --watch
// 	npm run dev
// 	npm run prod

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
	entry: {
		app: './src/app.js',
		contact: './src/contact.js'
	},
	output: {
		path:  path.resolve(__dirname + '/dist'),
		filename: '[name].bundle.js'	// "app.bundle.js" changed to [name].bundle.js to make dynamic
	},
	module: {
		rules: [
			{
				test: /\.scss$/, 
				use: ExtractTextPlugin.extract({
					fallbackLoader: 'style-loader', 
					loader: ['css-loader', 'sass-loader'],
					publicPath: '/dist'
				})﻿
			},
			{
				test: /\.js$/,				// test for JS files
				exclude: /node_modules/,
				use: 'babel-loader'			// tell Webpack to use babel loader				
			}
		]
	},
	devServer : {
		contentBase: path.join(__dirname, "dist"),	// where we want to serve out files.
		compress: true,
		// port: 9000,
		stats: "errors-only",		// when "npm run dev" in Terminal, only shows error messages and not the whole run.
		// open: true				// this will open a new window when "npm run dev"
	},
	plugins: [
	  	new HtmlWebpackPlugin({
	    	title: 'Webpack 101',
	    	// Minify HTML
	    	// minify: {
	    	// 	collapseWhitespace: true
	    	// },
	    	hash: true,
	    	excludeChunks: ['contact'],		// exclude contact template
	    	template: './src/index.html'
	  	}),
	  	new HtmlWebpackPlugin({
	    	title: 'Contact Page',
	    	hash: true,
	    	chunks: ['contact'],			// include contact template
	    	filename: 'contact.html',
	    	template: './src/contact.html'
	  	}),
	  	new ExtractTextPlugin({
	  		filename: 'app.css',
	  		disable: false,
	  		allChunks: true
	  	})

	]
}


// 	Notes :
// 	
// 	For errors goto : 
// 	https://webpack.js.org/guides/migrating/#extracttextwebpackplugin-breaking-change
// 
// 	"Loaders" : to include css into our project. 
// 	"Loaders" is essentially a function that takes the file path or URL of a image and includes that inside of the final bundle.
// 	So if we want to include a CSS, we need a CSS Loader.

// 	"extract-text-webpack-plugin" :
// 	To have all these files ['style-loader', 'css-loader', 'sass-loader'] exported into one file.


// 	"Webpack" and "Webpack Dev Server"
// 	
// 	When "webpack" is run :
// 	Renders and writes files in "dist"
// 	
// 	When "webpack-dev-server" is run :
// 	Files are served from memory

// 	"RimRaf" :
// 	erases all files in "dist" folder so new edited files can be served on save







