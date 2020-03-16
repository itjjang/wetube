const path = require("path");   // [impoer path from "path"] 와 동일하나 "webpack.config.js" 는 모던 js 사용 불가
const autoprefixer = require("autoprefixer");
const ExtractCSS = require("extract-text-webpack-plugin");

const MODE = process.env.WEBPACK_ENV;
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
const OUTPUT_DIR = path.join(__dirname, "static");

const config = {
    entry: ["@babel/polyfill", ENTRY_FILE],
    mode: MODE,
    module: { 
        rules: [
            {
                test: /\.(js)$/,
                use: [
                    {
                        loader: "babel-loader"
                    }
                ]
            },
            {
                 test: /\.(scss)$/,
                 use: ExtractCSS.extract([
                    {
                        loader: "css-loader"            // webpack이 css를 이해
                    },
                    {
                        loader: "postcss-loader",        // css를 받아 전달한 plugin을 이용해 css 반환 (css 호환성 처리)
                        options: {
                            plugins() {
                                return [autoprefixer({ browers: "cover 99.5%" })];
                            }
                        }
                    },
                    {
                        loader: "sass-loader"           // sass나 scss를 받아 css로 변경 가능
                    }
                ])
            }
        ]
    },
    output: {
        path: OUTPUT_DIR,
        filename: "[name].[format]"
    },
    plugins: [new ExtractCSS("styles.css")]
};

module.exports = config;
