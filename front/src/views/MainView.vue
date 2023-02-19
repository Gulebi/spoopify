<script>
import Main from "../components/Main.vue";
import Footer from "../components/Footer.vue";

export default {
    name: "MainView",
    components: {
        Main,
        Footer,
    },
};
</script>

<template>
    <div id="container">
        <Main></Main>
        <Footer></Footer>
    </div>
</template>

<style scoped>
#container {
    display: grid;
    grid-template-rows: 1fr 100px;
    height: 100vh;
}
</style>
