const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src') + '/index.js',
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                use: [{
                  loader: 'babel-loader',
                  options: {
                    presets: [
                      ['@babel/preset-env', {
                        "targets": "defaults" 
                      }],
                      '@babel/preset-react'
                    ]
                  }
                }]
            }
        ]
    },
    output: {
        /*Webpack producing results*/
            path: path.resolve(__dirname, "./static/frontend"),
            filename: "main.js"
        },
}