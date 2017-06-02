module.exports = {
    entry: {
        'app': './src/main.ts'
    },

    output: {
        path: __dirname + '/public',
        filename: 'index.js'
    },

    devtool: "source-map",

    resolve: {
        extensions: [ ".ts", ".tsx", ".js" ]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                test: /\.js$/,
                enforce: "pre",
                loader: "source-map-loader"
            }
        ]
    },

    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    },

    // To avoid bundling all of our dependencies,
    // which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM",
    }
};
