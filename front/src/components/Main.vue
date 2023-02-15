<script>
import router from "../router/index";

import Sidebar from "./Sidebar.vue";

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
