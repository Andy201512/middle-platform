<script setup lang="ts">
import { routes } from '@/router'


</script>

<template>
  <ul>
    <li v-for="item in routes"><router-link :to="item.path">{{ item.name }}</router-link></li>
  </ul>
</template>

<style scoped>
</style>