const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
	mode: "development",
	devServer: {
		port: 8082,
	},
	plugins: [
		new ModuleFederationPlugin({
			name: "cart", //There must not be an element in the DOM with an ID equal to this name
			filename: "remoteEntry.js",
			exposes: {
				"./CartShow": "./src/bootstrap.js",
			},
			shared: ["faker"],
		}),
		new HtmlWebpackPlugin({ template: "./public/index.html" }),
	],
};
