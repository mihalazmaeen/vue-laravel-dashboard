import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import axios from "axios";
import { routes } from "./routes";
import User from "./Helpers/User";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";


const app = createApp({});

const router = createRouter({
    history: createWebHistory(),
    routes,
});

app.use(router);
app.use(VueSweetalert2);

// Provide the User instance in the main Vue app or a global component
app.provide("User", User);

app.mount("#app");
