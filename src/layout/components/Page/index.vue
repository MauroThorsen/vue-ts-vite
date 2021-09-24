<template>
  <div class="main-page">
    <keep-alive>
      <router-view :key="key" />
    </keep-alive>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'page',
  setup() {
    const route = useRoute()
    const key = () => {
      return route.path
    }
    return {
      key
    }
  }
})
</script>

<style scoped>
.main-page {
  width: 100vw;
  height: 90vh;
  background-color: #eeeeee;
}
</style>
