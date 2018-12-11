const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    mode: 'development',
    entry: {
        vue: 'vue',
        index: './src/index.js',
    },
    output: {
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                // vue-loader config to load `.vue` files or single file components.
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        js: [
                            'babel-loader',
                        ],
                    },
                    cacheBusting: true,
                },
            },
            {
                // This is required for other javascript you are gonna write besides vue.
                test: /\.js$/,
                loader: 'babel-loader',
                include: [
                    './src',
                    './node_modules/webpack-dev-server/client',
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ],
    },
    devtool: 'eval',
    devServer: {
        inline: true,
        contentBase: './dist',
        port: 8080
    },
    plugins: [
        new VueLoaderPlugin(),
        // Exchanges, adds, or removes modules while an application is running, without a full reload.
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
    resolve: {
        // The compiler-included build of vue which allows to use vue templates without pre-compiling them
        alias: { 'vue$': 'vue/dist/vue.esm.js', },
        extensions: ['*', '.vue', '.js', '.json'],
    },
    performance: {
        hints: false,  // webpack outputs performance related stuff in the browser.
    },
};
