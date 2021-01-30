import { createApp } from 'vue';

import app from './app.vue';
import router from '../src/router'

createApp(app)
    .use(router)
    .mount('#app');
