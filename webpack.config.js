module.exports = {
    entry: "./src/app/index.tsx",
    output: {
        filename: "index.js",
        path: __dirname + "/src/public"
    },

    devtool: "source-map",

    resolve: {
        extensions: [ ".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                test: /\.tsx?$/,
                loaders: [
                    {
                        loader: "awesome-typescript-loader",
                        options: {
                            configFileName: "./tsconfig.json"
                        }
                    }
                ]
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },

    // To avoid bundling all of our dependencies,
    // which allows browsers to cache those libraries between builds.
    externals: {

    }
};