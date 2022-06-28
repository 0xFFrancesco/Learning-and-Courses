const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const prodConfig = {
	mode: "production",
	output: {
		publicPath: "/auth/latest/",
		filename: "[name].[contenthash].js",
	},
	plugins: [
		new ModuleFederationPlugin({
			name: "auth",
			filename: "remoteEntry.js",
			exposes: {
				"./AuthApp": "./src/bootstrap",
			},
			shared: packageJson.dependencies,
		}),
	],
};

module.exports = merge(commonConfig, prodConfig);
