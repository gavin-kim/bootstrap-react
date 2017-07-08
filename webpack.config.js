module.exports = {
    entry: ["babel-polyfill", "./src/app/index.js"],
    output: {
        filename: "bundle.js",
        path: __dirname + "/src/public"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    }
};