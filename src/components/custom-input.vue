<template>
  <slot name="header"></slot>
  <slot name="default" :item="test"></slot>
  <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
  <slot name="footer"></slot>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'custom-input',
  setup() {},
  props: ['modelValue'],
  data() {
    return {
      test: {
        a: 1,
        b: 2,
        c: 3
      }
    }
  }
})
</script>

<style scoped></style>
