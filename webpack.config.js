const path = require('path');
const DIST = path.resolve(__dirname,'dist');
const SRC = path.resolve(__dirname,'src');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: SRC + '/app/index.js',
    output: {
        path: DIST + '/app/',
        filename: 'bundle.js',
        publicPath: '/app/'
    },
    devServer: {
        contentBase: path.join(__dirname,'dist'),
        compress:true
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
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use : [
                        'css-loader',
                        'less-loader'
                    ]
                })
            }
        ]
    },
    plugins:[
        new ExtractTextPlugin({
            filename: '../css/style.css',
            allChunks:true,
            disable: process.env.NODE_ENV === "development"
        })
    ]
};