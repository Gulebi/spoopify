<script>
import router from "../router/index";
import userServiceClass from "../services/user.service";
import { useUserStore } from "../stores/user";

import Sidebar from "./Sidebar.vue";

const userService = new userServiceClass();

export default {
    name: "Main",
    components: {
        Sidebar,
    },
    data() {
        return {
            currentUserId: localStorage.getItem("currentUserId"),
        };
    },
    created() {
        if (!this.currentUserId) {
            router.push({ path: "/login" });
        }

        const userStore = useUserStore();

        userService.getUserInfo(this.currentUserId).then((res) => {
            userStore.changeUserInfo(res.data);
            console.log("Received user data!");
        });
    },
};
</script>

<template>
    <main>
        <Sidebar></Sidebar>
        <router-view />
    </main>
</template>

<style scoped>
main {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 7fr;
    background: var(--main-color);
}
</style>
