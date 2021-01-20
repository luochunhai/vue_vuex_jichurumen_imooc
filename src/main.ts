import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

router.beforeEach((to, from, next) => {
    if (store.state.userInfo || to.path === "/login") {
        next()
    } else {
        next({
            path: "/login"
        })
    }
})

createApp(App).use(store).use(router).mount('#app')
