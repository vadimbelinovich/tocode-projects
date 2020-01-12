import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import notes from "./notes";
import modal from "./modals";

export default new Vuex.Store({
  modules: { notes, modal }
});
