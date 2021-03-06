// default
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

// Pages
import Modals from "@/pages/Modals";
import NotFound from "@/pages/404";
import Notes from "@/pages/Notes";
import Notify from "@/pages/NotifyPage";
import Github from "@/pages/GithubPage";

// Routering
export default new Router({
  // mode: 'history',
  routes: [
    {
      path: "/",
      name: "Modals",
      component: Modals
    },
    {
      path: "/notes",
      name: "Notes",
      component: Notes
    },
    {
      path: "/NotifyPage",
      name: "Notify",
      component: Notify
    },
    {
      path: "/GithubPage",
      name: "Github",
      component: Github
    },
    {
      path: "*",
      name: "notFound",
      component: NotFound
    }
  ]
});
