<template>
  <div>
    <div>123123131</div>
    <div>123</div>
    <login-card></login-card>
  </div>
</template>

<script>
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
