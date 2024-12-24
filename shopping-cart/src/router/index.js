import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../components/Home.vue";
import Cart from "../components/Cart.vue";
import Men from "../components/Men.vue";
import Ladies from "../components/Ladies.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home

        },

        {
            path: '/men',
            name: 'men',
            component: Men
            
        },

        {
            path: '/ladies',
            name: 'ladies',
            component: Ladies
        },

        {
            path: '/cart',
            name: 'cart',
            component: Cart

        }


    ]
})

export default router;