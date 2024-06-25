import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {//这是首页的路由
        path: '/home',
        name: 'home',
        meta: { required: true },
        component: ()=> import( '@/components/home/index.vue' )
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})


export default router;