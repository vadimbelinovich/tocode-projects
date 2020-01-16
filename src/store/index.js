import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import notes from "./notes";
import modal from "./modals";
import notify from "./notify";
import loading from "./loading";
import error from "./error";

export default new Vuex.Store({
  modules: { 
    notes, 
    modal, 
    notify, 
    loading, 
    error
  }
});
