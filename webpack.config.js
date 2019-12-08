const path = require('path');

const moduleObject = {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: [/node_modules/],
            use: {
                loader: 'babel-loader'
            }
        }
    ]
};

const client = {
    entry: {
        client: './src/client/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist/public'),
        filename: '[name].js'
    },
    target: 'web',
    module: moduleObject
};

const server = {
    entry: {
        server: './src/server/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    target: 'node',
    module: moduleObject
};

module.exports = [client, server];