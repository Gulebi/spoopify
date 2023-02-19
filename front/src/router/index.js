import { createRouter, createWebHistory } from "vue-router";

import MainView from "../views/MainView.vue";
import LoginView from "../views/LoginView.vue";
import SignupView from "../views/SignupView.vue";

import Search from "../components/Search.vue";
import Playlist from "../components/Playlist.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            component: MainView,
            children: [
                {
                    path: "/search",
                    component: Search,
                },
                {
                    path: "/playlist/:id",
                    component: Playlist,
                },
            ],
        },
        {
            path: "/login",
            component: LoginView,
        },
        {
            path: "/signup",
            component: SignupView,
        },
    ],
});

export default router;
