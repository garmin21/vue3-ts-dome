const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader/dist/index');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: resolve(__dirname, './src/main.ts'), // 入口文件
    output: {
        path: resolve(__dirname, 'dist'), // 打包出口
        filename: 'js/[name].js' // 打包完成后的静态资源名
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    'vue-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    '@babel/preset-env',
                                    {
                                        // polyfill 按需加载
                                        targets: {
                                            edge: '17',
                                            firefox: '60',
                                            chrome: '67',
                                            safari: '11.1',
                                            ie: '9'
                                        },
                                        useBuiltIns: 'usage',
                                        corejs: {
                                            version: 3
                                        }
                                    }
                                ]
                            ],
                            // 开启babel缓存
                            // webpack构建打包速度(第二次)更快
                            cacheDirectory: true
                        }
                    }
                ]
            },
            {
                test: /\.tsx?$/,
                use:'ts-loader',
                include: resolve('src')
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, './public/index.html'),
            filename: 'index.html',
            title: 'vue开发服务'
        }),
        new VueLoaderPlugin(),
        new CleanWebpackPlugin()
    ],
    mode: 'development',
    devtool: 'source-map',  // 将编译后的代码映射回原始源代码，更容易地追踪错误和警告
    devServer: {
        contentBase: resolve(__dirname, 'dist'), // 项目根目录
        compress: true, // 启动gzip压缩
        port: 3000,
        open: true, // 自动打开浏览器
        hot: true // 开启HMR功能
    },
    resolve: {
        extensions: ['.ts','.tsx', '.js']
    }
}