<script lang="ts">
import { defineComponent, reactive, toRaw } from 'vue';
import type { UnwrapRef } from 'vue';

interface FormState {
  name: string;
  age: string;
  address: string;
  tags: string[];
}
export default defineComponent({
  emits: ['submit', 'cancel'],
  setup( props, context ) {
    const formState: UnwrapRef<FormState> = reactive({
      name: '',
      age: '',
      address: '',
      tags: [],
    });

    const clear = () => {
      formState.name = '';
      formState.age = '';
      formState.address = '';
      formState.tags = [];
    };

    const onSubmit = () => {
      context.emit('submit', toRaw(formState));
      clear();
    };

    const onCancel = () => {
      context.emit('cancel');
      clear();
    };

    return {
      labelCol: { span: 5 },
      wrapperCol: { span: 14 },
      formState,
      onSubmit,
      onCancel,
    };
  },
});
</script>

<template>
  <a-form :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-item label="name">
      <a-input v-model:value="formState.name" />
    </a-form-item>
    <a-form-item label="age">
      <a-input v-model:value="formState.age" />
    </a-form-item>
    <a-form-item label="address">
      <a-input v-model:value="formState.address" />
    </a-form-item>
    <a-form-item label="tags">
      <a-select v-model:value="formState.tags" mode="multiple">
        <a-select-option value="NICE">NICE</a-select-option>
        <a-select-option value="DEVELOPER">DEVELOPER</a-select-option>
        <a-select-option value="LOSER">LOSER</a-select-option>
        <a-select-option value="COOL">COOL</a-select-option>
        <a-select-option value="TEACHER">TEACHER</a-select-option>
        <a-select-option value="GUAPI">GUAPI</a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="onSubmit">submit</a-button>
      <a-button style="margin-left: 10px" @click="onCancel">Cancel</a-button>
    </a-form-item>
  </a-form>
</template>
