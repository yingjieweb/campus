import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import AmapVue from '@amap/amap-vue'
AmapVue.config.key = '8e342d7d66ccb8ec1b251540d9f2efc2'
Vue.use(AmapVue)

Vue.use(ElementUI);

Vue.config.productionTip = false;

//添加事件总线对象
Vue.prototype.$EventBus = new Vue();

import Layout from  '@/components/layout/Layout.vue'
import Block from  '@/components/block/Block.vue'
import Blank from "@/views/statusCode/Blank"
Vue.component('Layout', Layout);
Vue.component('Block', Block);
Vue.component('Blank', Blank);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
