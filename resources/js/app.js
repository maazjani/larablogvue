import './bootstrap';

import { createApp } from 'vue';
import "../css/app.css";
import "./fontawesome.min.js";
import "./bootstrap.min.js";

import App from './App.vue';

const app = createApp(App);
app.mount('#app');
