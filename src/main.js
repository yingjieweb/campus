import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.config.productionTip = false;

//添加事件总线对象
Vue.prototype.$EventBus = new Vue();

import Layout from  '@/components/layout/Layout.vue'
import Block from  '@/components/block/Block.vue'
Vue.component('Layout', Layout);
Vue.component('Block', Block);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
