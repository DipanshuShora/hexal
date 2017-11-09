const path = require('path');
const DIST = path.resolve(__dirname,'dist');
const SRC = path.resolve(__dirname,'src');
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
            },
            {
                test: /\.(png|jpg|gif)$/,
                use:[
                    "file-loader"
                ]
            }
        ]
    }
};