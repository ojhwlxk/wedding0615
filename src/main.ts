import '@/assets/style/main.css'

import { createApp } from 'vue'
import { createNaverMap } from "vue3-naver-maps"
import App from './App.vue'

createApp(App)
    .use(createNaverMap, {
        clientId: "mqc6xtncwo", // Required
        // category: "ncp", // Optional
        // subModules: [], // Optional
    })
    .mount('#app')
