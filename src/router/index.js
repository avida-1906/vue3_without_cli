import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {//这是重定向路由
        path: '/',
        name: 'retry',
        redirect: ( ( to )=> {
            return { name: 'home' }
        } )
    },
    {//这是首页的路由
        path: '/home',
        name: 'home',
        meta: { required: true },
        component: ()=> import( '@/components/home/index.vue' )
    },
    {//学习一下组件库el-table表格
        path: '/table_study',
        name: 'table_study',
        meta: { required: true },
        component: ()=> import( '@/components/el_table_study/index.vue' )
    },
    {//学习一下组件库el-skeleton骨架屏
        path: '/skeleton_study',
        name: 'skeleton_study',
        meta: { required: true },
        component: ()=> import( '@/components/el_skeleton_study/index.vue' )
    },
    {//学习一下组件库el-skeleton骨架屏
        path: '/pagination_study',
        name: 'pagination_study',
        meta: { required: true },
        component: ()=> import( '@/components/el_pagination_study/index.vue' )
    },
    {//学习一下组件库el_form_study表单
        path: '/form_study',
        name: 'form_study',
        meta: { required: true },
        component: ()=> import( '@/components/el_form_study/index.vue' )
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})


export default router;