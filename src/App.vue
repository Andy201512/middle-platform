<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Header from '@/views/Header.vue'
import Sidebar from '@/views/Sidebar.vue';
import Mainbox from '@/views/Mainbox.vue'
</script>

<template>
  <Header></Header>
  <div id="section">
    <div id="sidebar">
      <Sidebar></Sidebar>
    </div>
    <div id="mainbox">
      <Mainbox></Mainbox>
    </div>
  </div>
</template>

<style>
html,body {
  height: 100%;
  margin: 0;
}
#app {
  height: 100%;
}
#section {
  display:flex;
  height: 80%;
}
#sidebar {
  background-color: aqua;
  flex: 20%;
}
#mainbox {
  border: thick double #32a1ce;;
  flex: 80%;
}
</style>
