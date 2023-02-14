<script>
import Sidebar from "./Sidebar.vue";

export default {
    name: "Main",
    components: {
        Sidebar,
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
