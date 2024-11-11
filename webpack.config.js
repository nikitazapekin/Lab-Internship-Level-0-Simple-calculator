const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

 
const config = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
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
        test: /\.html$/,
        use: 'html-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
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

module.exports = config;


/*import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

interface WebpackConfiguration extends webpack.Configuration {
  devServer?: DevServerConfiguration;
}

const config: WebpackConfiguration = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
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
        test: /\.html$/,
        use: 'html-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
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

export default config;
*/
/*

import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

interface WebpackConfig {
  entry: string;
  output: {
    path: string;
    filename: string;
  };
  mode: 'development' | 'production';
  module: {
    rules: any[];
  };
  plugins: any[];
  devServer?: {
    open: boolean;
    port: number;
  };
}

const config: WebpackConfig = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: 'development', // Меняется на 'production' для продакшн сборки
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
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
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  devServer: {
    open: true,
    port: 8080,
  },
};

export default config;
*/

/*
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const ENTRY_PATH = path.resolve(__dirname, "src/index");
const DIST_PATH = path.resolve(__dirname, "dist");

module.exports = {
    entry: {
        main: ENTRY_PATH,
    },
    output: {
        path: DIST_PATH,
        filename: "[name].[contenthash].js",
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader", // Встраивает стили в DOM
                    "css-loader",   // Обрабатывает `@import` и `url()` в CSS
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", 
                    "css-loader",    
                    "sass-loader",
                ],
            },
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            }
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".css", ".scss"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: path.join(__dirname, "index.html"),
        }),
    ],
    devtool: "inline-source-map",
    devServer: {
        static: DIST_PATH,
        hot: true,
    },
};
*/

/*
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const ENTRY_PATH = path.resolve(__dirname, "src/index");
const DIST_PATH = path.resolve(__dirname, "dist");

module.exports = {
    entry: {
        main: ENTRY_PATH,
    },
    output: {
        path: DIST_PATH,
        filename: "[name].[contenthash].js",
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
         
            {
                test: /\.scss$/,
                use: [
                  'style-loader', 
                  'css-loader',    
                  'sass-loader',  
                ],
              },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    plugins: [
 
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: path.join(__dirname, "index.html"),  
        }),
        
    ],
    devtool: "inline-source-map",
    devServer: {
        static: DIST_PATH,
        hot: true,
    },
};
*/