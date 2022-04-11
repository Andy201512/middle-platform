import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';
import { store } from './store';

// 按需导入ant-design-vue组件
import { Button, Menu, Layout } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

const app = createApp(App);

app
.use(router)
.use(store)
.use(Button)
.use(Menu)
.use(Layout)
.mount('#app');
