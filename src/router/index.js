import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '@/components/pages/Login';
import dashboard from '@/components/dashboard';
import Products from '@/components/pages/Products'
Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path:'*',
            redirect:'login'
        },
        {
            path:'/login',
            name:'Login',
            component:Login
        },
        {
            path: '/admin',
            name: 'HelloWorld',
            component: dashboard,
            children:[
                {
                    path: 'products',
                    name: 'Products',
                    component: Products,
                    meta: { requiresAuth: true },
                }
            ]
        }
    ]
})