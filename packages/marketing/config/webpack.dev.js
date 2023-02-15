const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge }= require('webpack-merge');
const commonConfig = require('./webpack.common');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');


const devConfig = {
    mode: 'development',
    devServer: {
        port: 4200,
        historyApiFallback:true
    },
    plugins: [
        new ModuleFederationPlugin(
            {
                name: 'marketing',
                filename:'remoteEntry.js',
                exposes:{
                    "./MarketingApp": "./src/bootstrap",
                },
                // shared: {
                //     ...deps,
                //     react: { singleton: true, eager: true, requiredVersion: deps.react },
                //     'react-dom': {
                //         singleton: true,
                //         eager: true,
                //         requiredVersion: deps['react-dom'],
                //     },
                // },
                shared: packageJson.dependencies
            }
        ),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};

module.exports = merge(commonConfig, devConfig);