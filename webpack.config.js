const path = require('path');
const DIST = path.resolve(__dirname,'dist');
const SRC = path.resolve(__dirname,'src');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: SRC + '/app/index.js',
    output: {
        path: DIST + '/app/',
        filename: 'bundle.js',
        publicPath: '/app/'
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                include: SRC,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use:[
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.less$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            }
            // {
            //     test: /\.css$/,
            //     use: ExtractTextPlugin.extract({
            //         fallback: 'style-loader',
            //         use: ['css-loader'],
            //         publicPath: '/css/'
            //     })
            // },
            // {
            //     test: /\.less$/,
            //     use: ExtractTextPlugin.extract({
            //         fallback: 'style-loader',
            //         use : [
            //             'css-loader',
            //             'less-loader'
            //         ],
            //         publicPath: '/css/'
            //     })
            // }
        ]
    }
    // ,
    // plugins:[
    //     new ExtractTextPlugin({
    //         filename: '../css/style.css',
    //         allChunks:true,
    //         disable: process.env.NODE_ENV === "development"
    //     })
    // ]
};