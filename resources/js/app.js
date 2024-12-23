import './bootstrap';

import { createApp } from 'vue';
import "../css/app.css";
import "./fontawesome.min.js";
import "./bootstrap.min.js";

import router from "./routes"

import App from './App.vue';

const app = createApp(App);
app.use( router );
app.mount('#app');
