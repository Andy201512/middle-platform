<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Header from '@/views/Header.vue'
import Sidebar from '@/views/Sidebar.vue';
import Mainbox from '@/views/Mainbox.vue'
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const collapsed = ref<boolean>(false)
const route = useRoute()
</script>

<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible v-if="route.meta.requireAuth">
      <Sidebar></Sidebar>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0; text-align: center" v-if="route.meta.requireAuth">
        <Header></Header>
      </a-layout-header>
      <a-layout-content :style="route.meta.requireAuth? 'margin: 0 16px;': 'background: linear-gradient(#7ec1ff, rgb(24 144 255 / 0%));'">
        <Mainbox></Mainbox>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Middle Platform ©2022 Created by Andy201512
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<style>
</style>
