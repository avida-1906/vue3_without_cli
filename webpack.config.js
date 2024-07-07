/* 
    报错：
    main.js:10 Feature flags __VUE_OPTIONS_API__, __VUE_PROD_DEVTOOLS__, __VUE_PROD_HYDRATION_MISMATCH_DETAILS__ are not explicitly defined. 
    You are running the esm-bundler build of Vue, 
    which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.
    For more details, see https://link.vuejs.org/feature-flags.
    解决的办法：
    const webpack = require( 'webpack' )
    plugins: [
        new webpack.DefinePlugin({
            __VUE_OPTIONS_API__: 'true',
            __VUE_PROD_DEVTOOLS__: 'false',
            __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false'
        })
    ],
*/


const path = require( 'path' );
const webpack = require( 'webpack' )
//vue-loader@next版本之后需要引入这个插件
const { VueLoaderPlugin } = require( 'vue-loader' )
const htmlWebpackPlugin = require( 'html-webpack-plugin' )

module.exports = {
    
    entry: './src/main.js',  //打包的入口
    //设置打包的出口
    output: {
        // publicPath: './',
        filename: 'main.js',
        path: path.resolve( __dirname, 'dist' ),
        clean: true  //每次打包都会清楚之前的代码
    },
    //设置别名
    resolve: {
        alias: {
            '@': path.join( __dirname, 'src' )
        },
    },
    //添加模块
    module: {
        rules: [
            {//设置.vue文件的解析规则
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            // {
            //     test: /\.(jpg|png)$/,
            //     use: {
            //       loader: "file-loader",
            //       options: {
            //         name: "\[path\]\[name\].\[hash\].\[ext\]",
            //       },
            //     },
            // },
            // {
            //     test: /\.(jpg|png)$/,
            //     use: {
            //       loader: "url-loader",
            //       options: {
            //         limit: 80000,
            //       },
            //     },
            //  },
            {//设置less的解析规则
                test: /\.less$/,  //这里只需要写less就可以了，不需要写css否则会报错。
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    {loader: 'less-loader' },
                ]
            },
            {//设置css的解析规则---这一项一定要配置，否则引入element plus组件库的css文件的时候会报错。
                test: /\.css$/,  //这里只需要写css就可以了，不需要写less否则会报错。
                use: [
                    { loader: 'style-loader' },
                    { 
                        loader: 'css-loader',
                        // options: {
                        //     importLoaders: 2,
                        //     url: false 
                        // }

                    },
                ]
            },
            // {
            //     test:/'\.(png|jpg|gif|woff|ttf)$'/,
            //     loader:'url-loader',
            //     options: {
            //         // limit: 10000,
            //         name: utils.assetsPath('img/[name].[hash:7].[ext]')
            //     }
            // },
            // {//设置图片加载资源的规则
            //     test: /\.(png|jpg|jpeg|gif)(\?.*)?$/i,
            //     loader: "file-loader",
            //     // loader: 'url-loader',
            //     // options: {
            //     //     limit: 10000,
            //     //     name: utils.assetsPath('img/[name].[hash:7].[ext]')
            //     // }
            // //     use: [

            // //         {
            // //         //报错：Error: Cannot find module 'file-loader'
            // //         //解决的办法：安装 file-loader模块
            // //           loader: 'url-loader?limit=8192'
            
            // // //           options: {
            
            // // //             // 图片小于8kb，就会被base64处理
            
            // // //             // 优点: 减少请求数量(减轻服务器压力)
            
            // // //             // 缺点：图片体积会更大(文件请求速度更慢)
            
            // // //             limit: 50000,
            
            // // // 　　　
                        
            // // //           }
            
            // //         }
            
            // //       ]
            //     // type: 'assets/resouce',
            //     // generator: {
            //     //     filename: 'images/[hash][ext][query]'
            //     // }
            // },
        ],
    },
    devtool: 'inline-source-map',  //错误追踪工具
    plugins: [
        new VueLoaderPlugin(),
        new htmlWebpackPlugin({
            filename: 'index.html',  //配置输出后的html文件名（可携带目录）
            template: './public/index.html'  //配置模板
        }),
        new webpack.DefinePlugin({
            __VUE_OPTIONS_API__: 'true',
            __VUE_PROD_DEVTOOLS__: 'false',
            __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
        })
    ],
    //配置webpack-dev-server将dist下的目录代理到web server
    devServer: {
        static: './dist'
    }
}