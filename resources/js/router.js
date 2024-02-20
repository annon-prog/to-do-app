import { createRouter, createWebHistory } from 'vue-router';
import Login from './components/Login.vue'

const routes =  [
        {
            path: '/login',
            // name: 'Login',
        component: Login
            // component: () => import('./pages/Login.vue')
        },
        {
            path: '/register',
            component: () => import('./components/Register.vue')
        },
        {
            path: '/home',
            component: () => import('./components/Home.vue')
        }
    ]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});
export default router;