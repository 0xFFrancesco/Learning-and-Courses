const webpack           = require('webpack');
const path              = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = [ "faker",
					  "lodash",
					  "react",
					  "react-dom",
					  "react-input-range",
					  "react-redux",
					  "react-router",
					  "redux",
					  "redux-form",
					  "redux-thunk", ];

module.exports = {
	
	//create two different trees (bundle and vendor)
	entry : {
		//bundle will resolve the three using its imports
		bundle : './src/index.js',
		//vendor will use this array of NPM packages' names
		vendor : VENDOR_LIBS
	},
	
	module : {
		rules : [ {
			//pass every JS file to babel
			use     : 'babel-loader',
			test    : /\.js$/, //exclude files form the node_modules folder, we assume all they have already been transpiled
			exclude : /node_modules/
		}, {
			//inject CSS files in the <head> with webpack
			use  : [ 'style-loader', 'css-loader' ],
			test : /\.css$/
		}, ]
	},
	
	output : {
		path     : path.join(__dirname, 'dist'),
		//output files with entry.key + chuck-generated-hash filename format
		filename : '[name][chunkhash].js'
	},
	
	
	plugins : [
		//take all the common code generated in my chunkes (vendor and bundle),
		//extract it and save it as a separate file called vendor.js
		//there is a gotcha in ashing with this plugin, we can fix it adding the manifest.js file
		new webpack.optimize.CommonsChunkPlugin({names : [ 'vendor', 'manifest' ]}),
		//automatically inject my generated JS files' references my index.html template
		new htmlWebpackPlugin({template : './src/index.html'}),
		//deploy stuff
		new webpack.DefinePlugin({
			 'process.env.NODE_ENV' : JSON.stringify(process.env.NODE_ENV)
		})]
	
};
