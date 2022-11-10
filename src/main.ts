import { createApp } from "vue";
import App from "./App.vue";
import { Quasar, Notify } from "quasar";
import "@quasar/extras/material-icons/material-icons.css";
import "quasar/src/css/index.sass";
import { router } from './router';
import VueCryptojs from 'vue-cryptojs';

const app = createApp(App);

app.use(router);
app.use(VueCryptojs);
app.use(Quasar, {
  plugins: {Notify},
});

app.mount("#app");
