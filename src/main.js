/* 
    项目在打包的过程中出现了多次错误，主要还是有些英文单词写错了，
    还有就是main.js文件里边被提示不能使用import关键字，
    在dist文件夹中的index.html文件里边给scrip标签添加type="module"这句话就好了。
*/

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import '@/assets/common.less'
import store from './store/index.js'  //这里只对vuex做两件事：第一就是引入store文件夹里边的index.js文件
import ElementPlus from 'element-plus'
/* 
    一开始因为这句话导致报错，百度了很久都百度不出答案，然后直接搜：webpack+这句话  就找到答案了。
    问题就出在webpack.config.js文件里边没有在rules里边给css做配置。
*/
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use( router )
app.use( store )  //第二就是挂载引入的store
app.use( ElementPlus )  //挂载ElementPlus组件库
app.mount( '#app' )