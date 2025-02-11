import '../styles/Toastbite.css'
import ToastTemplate from "./components/ToastTemplate.vue";
import { useToast } from "./components/useToast.js";
import { createApp } from 'vue';

const div = document.createElement("div");
document.body.appendChild(div);
app = createApp(ToastTemplate);
app.mount(div);

export {useToast}

