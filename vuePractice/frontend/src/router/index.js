import AlertsEx from "@/views/AlertsEx.vue";
import ApplicationEx from "@/views/ApplicationEx.vue";
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    //alerts
    path: "/alertsEx",
    name: "AlertsEx",
    component: AlertsEx,
  },
  {
    //application
    path: "/applicationEx",
    name: "ApplicationEx",
    component: ApplicationEx,
  },
];

const router = new VueRouter({
  routes,
  mode: "hash",
});

export default router;
