import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { store, key } from "./store";
import "./styles/index.scss";
import api from "./api";

//按需引入组件
import { globalRegister } from "./global";

const app = createApp(App);
app.use(store, key);
app.use(router);
app.use(globalRegister);

// 全局挂载api
app.config.globalProperties.$api = api;
app.mount("#app");
