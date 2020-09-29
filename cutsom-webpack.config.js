const webpack = require('webpack');

module.exports = {
    plugins: [new webpack.DefinePlugin({
        'process.env': {
            SERVER_HOST: JSON.stringify(process.env.SERVER_HOST),
            SERVER_PORT: JSON.stringify(process.env.SERVER_PORT),
            SERVER_PROTOCOL: JSON.stringify(process.env.SERVER_PROTOCOL)
        }
    })]
}