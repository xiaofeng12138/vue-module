import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";
import '@/js/svg.js'

//引入vant样式
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
