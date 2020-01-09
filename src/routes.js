// default
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

// Pages
import Home from "@/pages/Home";
import NotFound from "@/pages/404";
import Notes from "@/pages/Notes";

// Routering
export default new Router({
  // mode: 'history',
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/notes",
      name: "Notes",
      component: Notes
    },
    {
      path: "*",
      name: "notFound",
      component: NotFound
    }
  ]
});
