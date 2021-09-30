<!--
 * @Author: your name
 * @Date: 2021-09-17 15:23:42
 * @LastEditTime: 2021-09-30 10:04:56
 * @LastEditors: Mashiro
 * @Description: In User Settings Edit
 * @FilePath: \vue-ts-vite\src\views\login\index.vue
-->
<template>
    <div style="width: 100%; height: 90vh">
        <the-login-card></the-login-card>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TheLoginCard from '@/components/TheLoginCard.vue'
import { test, login } from '@/api/user'
import { CustomResponse } from '@/utils/request'
export default defineComponent({
    name: 'login',
    components: {
        TheLoginCard
        // CustomInput
    },
    data() {
        return {
            text: '',
            test: 'this is test'
        }
    },
    watch: {
        text(newData, oldData) {
            console.log(newData, oldData)
        }
    },
    setup() {

    },
    mounted() {
        test().then(res => {
            console.log(res)
        }).catch()
        login({ a: 'ww' }).then(res => {
        })
    }
})
</script>

<style scoped>
</style>
