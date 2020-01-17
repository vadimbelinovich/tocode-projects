import Vue from "vue";
import App from "./App.vue";

import Vuelidate from "vuelidate";
import router from "./routes";
import store from "./store";

Vue.use(Vuelidate);

import "./assets/scss/main.scss";

Vue.component(
  "login-button",
  require("./components/UI/controls/buttons/Login.vue").default
);

Vue.component(
  "notify-component",
  require("./components/UI/Notify.vue").default
);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
