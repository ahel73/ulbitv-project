
import HTMLWebpackPlagin from 'html-webpack-plugin';
import webpack from 'webpack';
import { BuildOptions } from './type/config';
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins({paths }: BuildOptions): webpack.WebpackPluginInstance [] {
    return [
        new HTMLWebpackPlagin({
            template: paths.html, // говорим что бы строил хтмл в билде по указанному шаблону
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        })
    ];
}