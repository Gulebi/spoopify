import { createRouter, createWebHistory } from "vue-router";

import MainView from "../views/MainView.vue";
import LoginView from "../views/LoginView.vue";
import SignupView from "../views/SignupView.vue";

import Home from "../components/Home.vue";
import Profile from "../components/Profile.vue";
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
                    path: "/home",
                    component: Home,
                },
                {
                    path: "/profile",
                    component: Profile,
                },
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
