/*
 * @Author: your name
 * @Date: 2021-09-17 15:21:56
 * @LastEditTime: 2021-09-30 09:05:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ts-vite\vite.config.ts
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// @ts-ignore
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src')
        }
    },
    base: './', // 打包路径
    server: {
        port: 4000, // 服务端口号
        open: true, // 服务启动时是否自动打开浏览器
        cors: true // 允许跨域
    }
})
