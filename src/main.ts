import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';
import { store } from './store';

// 按需导入ant-design-vue组件
import { Button, Menu, Layout, Divider, Card, Avatar } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import "@/mock/index";

const app = createApp(App);

app
.use(router)
.use(store)
.use(Button)
.use(Menu)
.use(Layout)
.use(Divider)
.use(Card)
.use(Avatar)
.mount('#app');
