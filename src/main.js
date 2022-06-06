import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// START FontAwesome Library
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// add icon name that you want
library.add(faGithub, faTwitter, faFacebookF);
Vue.component("font-awesome-icon", FontAwesomeIcon);

// used fonts in application
import "./assets/fonts/app-font.css";
// #App main style
import "./assets/scss/main.scss";
// normalize.css
import "normalize.css";

// axios for HTTP REQUEST
import axios from "axios";
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

new Vue({
   router,
   store,
   render: h => h(App)
}).$mount("#app");
