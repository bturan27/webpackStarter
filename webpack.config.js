const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
//htmlwebpackplugin creates our index.html file for us
module.exports = {
    entry: './src/index.js',
    //index.js source icinde  entry file
    output: {
        //output where we want our compiled code to go it is gonna be bundle file. we are puttting the dist folder.we have to
        //specicy the file name.
        "path": path.join(__dirname, '/dist'),
        "filename": "index_bundle.js"
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader:'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                template:'./src/index.html'
            }
        )
    ]

}