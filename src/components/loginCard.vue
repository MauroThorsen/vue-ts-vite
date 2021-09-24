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

export default defineComponent({
  name: 'loginCard',
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
    const methods = reactive({
      login: () => {
        console.log(loginForm)
      },
      isValidate: (str: string): boolean => {
        const reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{3,16}$/
        const ps = new RegExp(reg)
        if (ps.test(str)) {
          return true
        }
        return false
      }
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
