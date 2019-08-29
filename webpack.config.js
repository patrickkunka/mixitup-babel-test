const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: "development",
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                // NB: the directory containing your mixitup extensions
                // must be excluded from transpilation
                exclude: /(node_modules|vendor)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/env',
                                {
                                    useBuiltIns: 'usage',
                                    corejs: 3,
                                    modules: false
                                }
                            ]
                        ]
                    }
                }
            }
        ]
    }
};