const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {    
    watch: true,
    output: {
        path: __dirname + '/public',
        filename: 'index.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Mauna",
            template: './public/index.html'
        })
    ],
    devServer: {
        port: 3000,      
    },    
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
        },
      ],      
    }
  };