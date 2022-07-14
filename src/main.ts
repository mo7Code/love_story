import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "normalize.css";
import VueTypedJs from "vue-typed-js";
import "@/assets/reset.scss";

createApp(App)
  .use(store)
  .use(router)
  .use(VueTypedJs)
  .mount("#app");
