import '../styles/Toastbite.css'
import Toast from "./components/Toast.vue";
import Toastify from "./components/Toastify.vue";
import { useToast } from "./components/useToast.js";

export { Toast, Toastify, useToast };

export default {
  install(app) {
    app.component("Toast", Toast);
    app.component("Toastify", Toastify);
    app.config.globalProperties.$toast = useToast();
  },
};
