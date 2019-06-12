import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/css/global.css";

import ElementUI from "element-ui";
Vue.use(ElementUI);
import "./assets/fonts/iconfont.css";

import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:11333/api/private/v1/";
Vue.prototype.$http = axios;
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
