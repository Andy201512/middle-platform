<script lang="ts">
import { defineComponent, ref } from 'vue';
import Form from '@/components/Form.vue'
export default defineComponent({
  components:{
    Form
  },
  emits: ['submit'],
  setup(props, context) {
    const visible = ref<boolean>(false);

    const afterVisibleChange = (bool: boolean) => {
      console.log('visible', bool);
    };

    const showDrawer = () => {
      visible.value = true;
    };

    const handleSubmit = (data: any) => {
      context.emit('submit', data);
      visible.value = false;
    };

    const handleCancel = () => {
      visible.value = false;
    }

    return {
      visible,
      afterVisibleChange,
      showDrawer,
      handleSubmit,
      handleCancel,
    };
  },
});
</script>

<template>
  <a-button type="primary" style="margin: 8px 0px 8px 0px" @click="showDrawer">Add</a-button>
  <a-drawer
    v-model:visible="visible"
    title="新增"
    placement="right"
    @after-visible-change="afterVisibleChange"
  >
    <Form @submit="handleSubmit" @cancel="handleCancel"></Form>
  </a-drawer>
</template>
