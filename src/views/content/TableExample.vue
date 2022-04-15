<script lang="ts">
import { defineComponent, ref } from 'vue';
import Table from '@/components/Table.vue'
import Drawer from '@/components/Drawer.vue'

export default defineComponent({
  name: '',
  components: {
    Table,
    Drawer,
  },
  methods: {},
  setup(props, context) {
    const table = ref();

    const handleSubmit = (data: any) => {
      console.log(data);
      table.value.addOne(data);
    };

    return {
      handleSubmit,
      table,
    };
  }
})
</script>

<template>
  <a-card>
    <Drawer @submit="handleSubmit"></Drawer>
    <Table ref="table"></Table>
  </a-card>
</template>

<style scoped>
</style>