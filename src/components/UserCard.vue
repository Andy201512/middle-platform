<script lang="ts">
import { defineComponent } from 'vue';
import { mapState, useStore } from 'vuex'

export default defineComponent({
  name: 'UserCard',
  components: {},
  computed: mapState(['user']),
  setup() {

    const store = useStore();

    const saveUserMutations = () => {
      store.commit('saveUser', {
        avatar: 'https://joeschmoe.io/api/v1/random',
        firstName: 'wuhu',
        lastName: 'dasima',
        email: 'guapi@qifei.com',
        phone: '12345678910',
      })
    }

    const saveUserAtions = () => {
      store.dispatch('saveUserAsync')
    };

    return {
      saveUserMutations,
      saveUserAtions,
    }
  }
})
</script>

<template>
  <a-card hoverable style="width: 420px">
    <a-card-meta title="用户信息">
      <template #avatar>
        <a-avatar :src="user.avatar" />
      </template>
      <template #description>
        <p>用户名：{{ user.firstName }} {{ user.lastName }}</p>
        <p>用户电子邮箱：{{ user.email }}</p>
        <p>用户手机号：{{ user.phone }}</p>
      </template>
    </a-card-meta>
  </a-card>
</template>

<style scoped>
</style>