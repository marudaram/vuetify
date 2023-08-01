import AlertsEx from "@/views/AlertsEx.vue";
import ApplicationEx from "@/views/ApplicationEx.vue";
import AspectRatiosEx from "@/views/AspectRatiosEx.vue";
import AvatarEx from "@/views/AvatarEx.vue";
import AvatarEx2 from "@/views/AvatarEx2.vue";
import BadgesEx from "@/views/BadgesEx.vue";
import BannersEx from "@/views/BannersEx.vue";
import AppbarsEx from "@/views/AppbarsEx.vue";
import SystembarEx from "@/views/SystembarEx.vue";
import BottomNavigationEx from "@/views/BottomNavigationEx.vue";
import BottomNavigationEx2 from "@/views/BottomNavigationEx2.vue";
import BottomSheetsEx from "@/views/BottomSheetsEx.vue";
import BreadCrumbsEx from "@/views/BreadCrumbsEx.vue";
import ButtonsEx from "@/views/ButtonsEx.vue";

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
  {
    //aspect ratios
    path: "/aspectRatiosEx",
    name: "AspectRatiosEx",
    component: AspectRatiosEx,
  },
  {
    //avatar
    path: "/avatarEx",
    name: "AvatarEx",
    component: AvatarEx,
  },
  {
    //avatar2
    path: "/avatarEx2",
    name: "AvatarEx2",
    component: AvatarEx2,
  },
  {
    //badges
    path: "/badgesEx",
    name: "BadgesEx",
    component: BadgesEx,
  },
  {
    //banners
    path: "/bannersEx",
    name: "BannersEx",
    component: BannersEx,
  },
  {
    //app bars
    path: "/appbarsEx",
    name: "AppbarsEx",
    component: AppbarsEx,
  },
  {
    //system bar
    path: "/systembarEx",
    name: "SystembarEx",
    component: SystembarEx,
  },
  {
    //bottom navigation
    path: "/bottomNavigationEx",
    name: "/BottomNavigationEx",
    component: BottomNavigationEx,
  },
  {
    //bottom navigation2
    path: "/bottomNavigationEx2",
    name: "/BottomNavigationEx2",
    component: BottomNavigationEx2,
  },
  {
    //bottom sheets
    path: "/bottomSheetsEx",
    name: "BottomSheetsEx",
    component: BottomSheetsEx,
  },
  {
    //bread crumbs
    path: "/breadCrumbsEx",
    name: "BreadCrumbsEx",
    component: BreadCrumbsEx,
  },
  {
    //buttons
    path: "/buttonsEx",
    name: "ButtonsEx",
    component: ButtonsEx,
  },
];

const router = new VueRouter({
  routes,
  mode: "hash",
});

export default router;
