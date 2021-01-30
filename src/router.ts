import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

import Index from './example/index.vue';


const routes: RouteRecordRaw [] = [
    {
        path: '/',
        name: 'Index',
        component: Index
    }
];


const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
    })




export default router;