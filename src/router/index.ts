import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [

    {
        path: '/countDemo',
        name: 'CountDemo',
        component: () => import(/* webpackChunkName: "about" */ '../views/CountDemo.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "about" */ '../pages/login.vue')
    },
    {
        path: '/',
        name: 'index',
        component: () => import(/* webpackChunkName: "about" */ '../pages/index.vue')
    },
    {
        path: "/userCenter",
        name: "userCenter",
        component: () => import("../pages/userCenter.vue")
    },
    {
        path: "/course/:id",
        name: "course",
        component: () => import("../pages/course.vue")
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
