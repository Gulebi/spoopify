<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";

export default {
    name: "App",
    components: {
        Header,
        Main,
    },
};
</script>

<template>
    <div id="container">
        <Header></Header>
        <Main></Main>
    </div>
</template>

<style scoped>
#container {
    display: flex;
    flex-direction: column;
    gap: 35px;
}
</style>
