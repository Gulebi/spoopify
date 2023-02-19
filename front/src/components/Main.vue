<script>
import router from "../router/index";
import userServiceClass from "../services/user.service";
import getInfoService from "../services/getInfo.service";
import { useUserStore } from "../stores/user";

import Sidebar from "./Sidebar.vue";

const userService = new userServiceClass();

const infoService = new getInfoService();

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
    mounted() {
        if (!this.currentUserId) {
            router.push({ path: "/login" });
        }

        const userStore = useUserStore();

        userService.getUserInfo(this.currentUserId).then((res) => {
            userStore.changeUserInfo(res.data);
            console.log("Received user data!");

            res.data.playlistsIds?.forEach((id) => {
                infoService.playlistInfoById(id).then((plRes) => {
                    userStore.playlistsInfo[plRes.data.id] = plRes.data;
                });
            });
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
