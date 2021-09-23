<template>
  <input @change="inputMsg($event, 'account')" />
  <input :value="password" />
  <button @click="login">登录</button>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue'

export default defineComponent({
  name: 'loginCard',
  setup() {
    // const loginForm = ref(null)
    interface form {
      account: string
      password: string
    }
    const login: form = reactive({
      account: '',
      password: ''
    })
    const methods = reactive({
      login: () => {
        console.log(login)
      },
      inputMsg: <K extends keyof object>($event: any, target: K): void => {
        console.log($event)
        login[target] = $event.srcElement.value
      }
    })
    return {
      ...toRefs(login),
      ...toRefs(methods)
    }
  }
})
</script>

<style scoped></style>
