import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {
    const svgLoader = {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff|woff2)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
    }

    const sassLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` node s from JS strings
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => resPath.includes(".module"),
                        localIdentName: isDev
                            ? "[path][name]__[local]_[hash:base64:8]"
                            : "[hash:base64:8]",
                    },
                },
            },
            // Compiles Sass to CSS
            "sass-loader",
        ],
    };

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    };

    return [typescriptLoader, sassLoader, fileLoader, svgLoader];
}
