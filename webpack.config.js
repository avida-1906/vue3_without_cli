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
            {//设置css的解析规则
                test: /\.less$/,  //这里只需要写less就可以了，不需要写css否则会报错。
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    {loader: 'less-loader' },
                ]
            },
            {//设置图片加载资源的规则
                test: /\.(png|jpe?g|gif)$/i,
                type: 'assets/resouce'
            },
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
            // options: {
            //     pluginOptions: {
            //         'style-resource-loader': {
            //             preProcessor: 'less',
            //             patterns: [ path.resolve( __dirname, './src/assets/common.less' ) ]
            //         }
            //     },
            // }
        })
    ],
    //配置webpack-dev-server将dist下的目录代理到web server
    devServer: {
        static: './dist'
    }
}