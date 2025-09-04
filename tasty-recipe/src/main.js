import "bootstrap/dist/css/bootstrap.css";

import "./assets/main.css";

import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import { routes } from './routes';

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {top: 0}
  }
})

createApp(App).use(router)
createApp(App).mount("#app");

import "bootstrap/dist/js/bootstrap";

