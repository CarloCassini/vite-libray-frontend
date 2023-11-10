import { createApp } from "vue";
import App from "./App.vue";

// importo il router
import { router } from "./data/router";

// importo il css di bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// importo le regole javascript di bootstap
import * as bootstrap from "bootstrap";

import "./assets/scss/style.scss";

createApp(App).use(router).mount("#app");
