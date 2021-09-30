<!--
 * @Author: your name
 * @Date: 2021-09-29 17:02:48
 * @LastEditTime: 2021-09-29 17:40:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ts-vite\src\components\loginCard.vue
-->
<template>
    <el-form ref="form" :model="loginForm" label-width="120px" class="form">
        <el-form-item label="account">
            <el-input v-model="loginForm.account"></el-input>
        </el-form-item>
        <el-form-item label="password">
            <el-input v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="login">Create</el-button>
            <el-button>Cancel</el-button>
        </el-form-item>
    </el-form>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, reactive, toRefs } from 'vue'
// eslint-disable-next-line import/extensions,import/no-unresolved
import Div from '@/ts/item'
import { ElMessage } from 'element-plus'

export default defineComponent({
    name: 'TheLoginCard',
    setup() {
        // const loginForm = ref(null)
        const item = reactive(new Div())
        interface form {
            account: string
            password: string
        }
        const loginForm: form = reactive({
            account: '',
            password: ''
        })
        const isValidate = function (str: string, ...args: string[]): boolean {
            const reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{3,16}$/
            const ps = new RegExp(reg)
            if (ps.test(str)) {
                for (let i = 0; i < args.length; i++) {
                    if (!ps.test(args[i])) {
                        return false
                    }
                }
                return true
            }
            return false
        }
        const methods = reactive({
            login: () => {
                console.log(loginForm)
                if (isValidate(loginForm.account, loginForm.password)) {

                }
                else {
                    ElMessage({
                        message: '账号和密码均为3~16位数字和密码组合',
                        type: 'error',
                    })
                }
            },

        })
        onBeforeMount(() => {
            // item.render()
        })
        return {
            item,
            loginForm,
            ...toRefs(methods)
        }
    }
})
</script>

<style scoped lang="scss">
.form {
    width: 60vw;
    margin: 0 auto;
}
</style>

function isValidate(account: string, password: string) {
  throw new Error('Function not implemented.')
}
