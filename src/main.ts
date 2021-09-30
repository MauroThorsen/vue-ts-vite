/*
 * @Author: your name
 * @Date: 2021-09-23 09:13:12
 * @LastEditTime: 2021-09-30 09:30:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ts-vite\src\main.ts
 */
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import route from '@/router/index'
// import { store } from '@/store/index'

const app = createApp(App)
app.use(ElementPlus)
app.use(route).mount('#app')
