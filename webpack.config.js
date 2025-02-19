const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	mode: 'development',
	entry: './src/index.ts',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.[contenthash].js',
		clean: true,
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.scss$/,  
				use: [
					'style-loader',  
					'css-loader',  
					'sass-loader',  
				],
			},
			{
				test: /\.html$/,
				use: 'html-loader',
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html',
		}),
		new webpack.HotModuleReplacementPlugin(),
	],
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'),
		},
		port: 3000,
		open: true,
		hot: true,
	},
};
 