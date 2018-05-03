const path = require("path"),
    HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    resolve: {
        alias: {
            'angular': path.resolve(path.join(__dirname, 'node_modules', 'angular'))
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env"],
                    plugins: [
                        require("@babel/plugin-proposal-object-rest-spread"),
                        require("babel-plugin-angularjs-annotate")
                    ],
                },
            },
            {
                test: /\.html$/,
                loader: "html-loader",
                options: {
                    minimize: true,
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "AngularJS + Redux Example",
            template: "public/index.html",
        }),
    ],

    devtool: "inline-source-map",
    devServer: {
        compress: true, // enable gzip compression
        historyApiFallback: true, // true for index.html upon 404, object for multiple paths
        hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
        https: false, // true for self-signed, object for cert authority
        noInfo: true, // only errors & warns on hot reload
    },
};
