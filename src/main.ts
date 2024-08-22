import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import Profile from "./pages/Profile.vue";
import Music from "./pages/Music.vue";
import Settings from "./pages/Settings.vue";
import Discover from "./pages/Discover.vue";
import User1 from "./pages/User1.vue";
import Search from "./pages/Search.vue";
import "./global.css";

interface Route {
  path: string;
  name: string;
  component: any;
}

const routes: Route[] = [
  {
    path: "/",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/music",
    name: "Music",
    component: Music,
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings,
  },
  {
    path: "/discover",
    name: "Discover",
    component: Discover,
  },
  {
    path: "/user",
    name: "User1",
    component: User1,
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((toRoute, _, next) => {
  const metaTitle = toRoute?.meta?.title as string;
  const metaDesc = toRoute?.meta?.description as string;

  window.document.title = metaTitle || "Music-Admin-Platform";
  if (metaDesc) {
    addMetaTag(metaDesc);
  }
  next();
});

const addMetaTag = (value: string) => {
  const element = document.querySelector(`meta[name='description']`);
  if (element) {
    element.setAttribute("content", value);
  }
};

const vuetify = createVuetify({ components, directives });

createApp(App).use(router).use(vuetify).mount("#app");

export default router;
