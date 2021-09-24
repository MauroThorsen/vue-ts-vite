<!--
 * @Author: your name
 * @Date: 2021-09-17 15:23:42
 * @LastEditTime: 2021-09-23 08:39:43
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue-ts-vite\src\views\login\index.vue
-->
<template>
  <div style="width: 100%; height: 90vh">
    <login-card></login-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// eslint-disable-next-line import/no-unresolved
// import CustomInput from '@/components/custom-input.vue'
// eslint-disable-next-line import/no-unresolved
import LoginCard from '@/components/loginCard.vue'

export default defineComponent({
  name: 'login',
  components: {
    LoginCard
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
  setup() {}
})
</script>

<style scoped></style>
