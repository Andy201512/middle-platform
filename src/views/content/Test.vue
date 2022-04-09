<script lang="ts">
import { defineComponent } from 'vue';
import { mapState, mapMutations } from 'vuex'

export default defineComponent({
  name: 'Test',
  components: {},
  methods: {
    ...mapMutations([
      'increment',
    ])
  },
  computed: mapState([
    // 映射 this.count 为 store.state.count
    'count'
  ])
});
</script>

<template>
  <button type="button" @click="increment()">count is: {{ count }}</button>
</template>

<style scoped>
</style>