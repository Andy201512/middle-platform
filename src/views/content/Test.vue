<script lang="ts">
import { defineComponent, ref } from 'vue';
import { mapState, mapMutations } from 'vuex'
import { message } from 'ant-design-vue';
import { testApi } from '@/utils/http/api'
import UserCard from '@/components/UserCard.vue'

export default defineComponent({
  name: 'Test',
  components: { UserCard },
  methods: {
    ...mapMutations([
      'increment',
    ])
  },
  computed: mapState([
    // 映射 this.count 为 store.state.count
    'count'
  ]),
  setup() {
    const arrIndex = ref(0);

    const userCard = ref();

    const info = () => {
      let messageArr = [
        '发生什么事了？', 
        '发生什么事了？', 
        '发生什么事了？', 
        '发生什么事了？',
        '变身！',
        '释放自我！',
        '走←我→的→路↗，假面骑士，贞→贞→贞→贞↑德↓…'
        ];

      message.info(messageArr[arrIndex.value]);

      arrIndex.value == messageArr.length - 1 ? arrIndex.value = 0 : arrIndex.value++;
    };

    const handleAxiosRequest = () => {
      message.info('请求马上开始啦');
      testApi({})
      .then((res) => { message.info(`请求成功数据，${ res.data.nickname }`)})
      .catch((err) => { console.log('请求失败数据', err)})
      .finally(() => { message.info('请求结束啦') });
    };

    const handleMutationsSaveUser = () => {
      userCard.value.saveUserMutations();
    };
    
    const handleActionsSaveUser = () => {
      userCard.value.saveUserAtions();
    };

    return {
      info,
      handleAxiosRequest,
      userCard,
      handleMutationsSaveUser,
      handleActionsSaveUser,
      arrIndex
    };
  },
});
</script>

<template>
  <a-divider>按钮初试</a-divider>
  <p><a-button type="primary" @click="info">变身</a-button></p>
  <a-divider>vuex初试</a-divider>
  <p><a-button type="primary" @click="increment()">count is: {{ count }}</a-button></p>
  <a-divider>axios初试</a-divider>
  <p><a-button type="primary" @click="handleAxiosRequest">发送http请求</a-button></p>
  <a-divider>vuex、axios结合</a-divider>
  <p><a-button type="primary" @click="handleMutationsSaveUser">mutations方式设置用户信息</a-button></p>
  <p><a-button type="primary" @click="handleActionsSaveUser">actions方式获取用户信息</a-button></p>
  <UserCard ref="userCard"/>
</template>

<style scoped>
</style>