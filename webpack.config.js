var webpack = require('webpack');

module.exports = {
    entry: './app/driver.js',
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'underscore-template-loader'
            }
        ]
    },
    output: {
        path: __dirname + '/static/js',
        filename: 'app.js'
    },
    plugins: [
        new webpack.ProvidePlugin({_: 'underscore'})
    ]
};
