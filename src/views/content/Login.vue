<script lang="ts">
import { defineComponent } from 'vue';
import LoginForm from '@/components/LoginForm.vue'

export default defineComponent({
  name: '',
  components: {
    LoginForm
  },
  methods: {},
  setup() {
    return {}
  }
})
</script>

<template>
  <a-card style="position: absolute;left: 50%;top: 50%;transform: translate(-50%, -50%);">
    <LoginForm></LoginForm>
  </a-card>
</template>

<style scoped>
</style>