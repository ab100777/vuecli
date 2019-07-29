import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '@/components/pages/Login';
import Dashboard from '@/components/Dashboard';
import Customerboard from '@/components/Customerboard'
import Products from '@/components/pages/Products'
import Coupons from '@/components/pages/Coupons'
import Orders from '@/components/pages/Orders'
import CustomerOrders from '@/components/pages/CustomerOrders'
import CustomerCheckout from '@/components/pages/CustomerCheckout'
import Cart from '@/components/pages/Cart'
import Commodity from '@/components/pages/Commodity'
Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '*',
            redirect: 'login'
        },
        {
            path: '/admin',
            name: 'Dashboard',
            component: Dashboard,
            children: [
                {
                    path: 'products',
                    name: 'Products',
                    component: Products,
                    meta: { requiresAuth: true },
                },
                {
                    path: 'coupons',
                    name: 'Coupons',
                    component: Coupons,
                    meta: { requiresAuth: true },
                },
                {
                    path: 'orders',
                    name: 'Orders',
                    component: Orders,
                    meta: { requiresAuth: true },
                }
            ]
        },
        {
            path: '/',
            name: 'customerboard',
            component: Customerboard,
            children: [
                {
                    path: '',
                    name: 'CustomerOrders',
                    component: CustomerOrders,
                },
                {
                    path: 'login',
                    name: 'Login',
                    component: Login
                },
                // {
                //     path: 'customer_order',
                //     name: 'CustomerOrders',
                //     component: CustomerOrders,
                // },
                {
                    path: 'customer_checkout/:orderId',
                    name: 'CustomerCheckout',
                    component: CustomerCheckout,
                },
                {
                    path: 'cart',
                    name: 'Cart',
                    component: Cart,
                },
                {
                    path: 'commodity/:id',
                    name: 'Commodity',
                    component: Commodity,
                }
            ],
        }
    ]
});