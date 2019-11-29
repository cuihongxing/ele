import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Axios from "axios";
// import Axios from "_axios@0.19.0@axios";
import "./plugins/element.js";
Vue.prototype.axios = Axios;
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");