module.exports = {
    module: {
        rules: [
            {
                test: /\.m?js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react',
                    ],
                    plugins:['@babel/plugin-transform-runtime']
                },
            },
            {
                test: /\.(css|s[ac]ss)$/i,
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
            {
                test: /\.(json)$/i,
                use: ["json-loader"],
            },
        ],
    },
};