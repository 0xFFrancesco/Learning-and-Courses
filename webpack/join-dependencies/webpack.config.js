const path        = require('path');
const extractText = require('extract-text-webpack-plugin');

const config = {
	
	//the main file which will start everything
	entry : './src/index.js',
	
	//rules to pre-process a file before putting it in the bundle files
	module : {
		rules : [ {
			//when reaching a .js file, pass it through babel first
			use  : 'babel-loader', //babel-loader is an interface for connect webpack with babel
			test : /\.js$/, //RegExp to filter the files to pro-process
		}, {
			//when reaching a .css file, pass it through css-loader, then take (extractText plugin)
			//all the content of the processing and put it in another file
			use : extractText.extract({
				use : 'css-loader'
			}),
			test   : /\.css$/
		}, {
			//when reaching an image
			test: /\.(jpe?g|png|git|svg)$/,
			//the image-loader compress the image, the url-loader decide whether to add
			//the image raw or use a link based on its size
			use: [{
				//we use an object instead of the loader name
				//if we need to pass some options to the loader
				loader: 'url-loader',
				options: {limit: 40000}
			}, 'image-webpack-loader'] //they are executed rtl
		} ]
	},
	
	//where to put and name the packed bundle.js
	output : {
		path    	: path.resolve(__dirname, 'build'),
		filename 	: 'bundle.js',
		publicPath 	: 'build/'
	},
	
	plugins: [
		//save all the text grabbed by the extractText loader to a file name style.css
		new extractText('style.css')
	]
	
};

module.exports = config;


//BEHIND THE WEBPACK MAGIC
/*
file a.js
const sum = require('./sum');
let x = sum(1, 4);
console.log(x);

file b.js
const sum = ( a, b ) => a + b;
module.exports = sum;

file bundle.js (simplified idea)
myModules:[

	(function(){
		const sum = ( a, b ) => a + b;
		return sum;
	}),
	
	(function(){
		const sum = myModule[0];
		let x = sum(1, 4);
		console.log(x);
	}),

];

myModule[1](); //run the starting point of my program
*/
