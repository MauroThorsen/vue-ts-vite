<!--
 * @Author: your name
 * @Date: 2021-09-17 15:21:56
 * @LastEditTime: 2021-09-30 09:27:25
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue-ts-vite\src\layout\default.vue
-->
<template>
    <div>
        <Navbar></Navbar>
        <Page></Page>
        <Footer></Footer>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// eslint-disable-next-line import/extensions,import/no-unresolved
import { Navbar, Page, Footer } from './components'

export default defineComponent({
    name: 'default',
    components: {
        Navbar,
        Page,
        Footer
    }
})
</script>

<style scoped lang="scss">
html,
body {
    font-size: 12px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    overflow: hidden;
    overflow-y: auto;
    background-color: #f5f7f9;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
}
</style>
