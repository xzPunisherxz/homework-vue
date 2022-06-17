import "./scss/index.scss";
import "./style/styles.css";

import App from './App.vue';

import router from "@/router";

import Api from "@/api";

import store from "@/store";


Vue.use(Api)

// Register local assets & components globally
require('@/utils/register-assets')
require('@/utils/register-components')

export const global = new Vue();

new Vue({
    el: '.vue-app',
    router: router(),
    store: store(),
    render: h => h(App),
  })