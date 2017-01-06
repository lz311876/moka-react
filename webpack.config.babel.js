import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8000',
        path.resolve(__dirname, './src/index.js')
    ],
    output: {
        path: path.resolve(__dirname, './assets'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel-loader?presets[]=es2015,presets[]=react']
            },
            {
                test: /(\.css|\.scss)$/,
                loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
            },
            {
                test: /\.json$/, loader: "json"
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            inject: true,
            remoteDebugger: ""
        })
    ],
    devServer: {
        contentBase: './assets',
        colors: true,
        inline: true,
        port: 8000,
        process: true
    }
}