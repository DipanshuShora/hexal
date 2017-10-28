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
    devServer: {
        contentBase: path.join(__dirname,'dist'),
        compress:true,
        inline:true
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                include: SRC,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
};