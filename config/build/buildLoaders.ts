import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildOptions } from './type/config';

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] { 
    
    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
                    },
                }
            },            
            // Compiles Sass to CSS
            "sass-loader",
        ],
    };
    // Если не используем typeScript нужен babel-loader
    const typescriptLoader = {
        test: /\.tsx?$/, // расширения файла с которым будет работать лоудер указанный в свойстве use
        use: 'ts-loader',
        exclude: /node_modules/, // папка в которой не обрабатываются файлы
    }
    return [ // конфигурируем лоудеры которые обрабатывают файлы выходящие за рамки js например пнг гиф и прочее
            typescriptLoader,
            cssLoader,
        ]
}