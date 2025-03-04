import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/reset.css";

//pinia
import { createPinia } from "pinia";
//emitter config
import mitt from "mitt";
const emitter = mitt();
import "@mdi/font/css/materialdesignicons.css";
///swiper
// In main.js or the relevant component file
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Components

createApp(App)
  .use(createPinia())
  .provide("emitter", emitter)
  .use(router)
  .mount("#app");
