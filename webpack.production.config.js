const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
 
let htmlWebpackPlugin = new HtmlWebpackPlugin({
    // 虚拟的html文件名 index.html
    filename: 'index.html',
    // 虚拟html的模板为 src下的index.html
    template: __dirname+'/src/index.html'
})

module.exports = {
    mode:"production",
    // 配置入口文件
    entry:{app:path.resolve(__dirname,'./src/index.jsx')
    },
    // 出口文件目录为根目录下dist, 输出的文件名为bundle
    output: {
        path: __dirname+'/dist',
        filename: 'bundle.js'
    },
    module: {
        // 根据文件后缀匹配规则
        rules: [
            // 配置js/jsx语法解析
            { test: /\.js|jsx$/, 
              use: 'babel-loader', 
              exclude: /node_modules/ },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                      {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                      },
                      {
                        loader: 'less-loader'
                      }
                    ]
                  })
            },
            {
                test: /\.(png|jpg)$/,use: 'url-loader?limit=40000'
            }
        ]
    },
    // 装载虚拟目录插件
    plugins: [htmlWebpackPlugin,
        new ExtractTextPlugin('style.css'),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
          })
    ],
    optimization: {
        minimizer: [
                 new UglifyJSPlugin({
                     uglifyOptions: {
                         output: {
                             comments: false
                         },
                         compress: {
                             warnings: false,
                             drop_debugger: true,
                             drop_console: true
                         }
                     }
                 }),
             ],
             splitChunks: {
                cacheGroups: {
                    commons: {
                        name: "commons",
                        chunks: "initial",
                        minChunks: 2
                    }
                }
            }   
       },
    resolve: {
        extensions: ['.js', '.jsx', '.less', '.scss', '.css'], //后缀名自动补全
    }   
}
