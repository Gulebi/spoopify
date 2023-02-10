<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";

export default {
    name: "App",
    components: {
        Header,
        Main,
        Footer,
    },
};
</script>

<template>
    <div id="container">
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
    </div>
</template>

<style scoped>
#container {
    height: 100vh;
    display: flex;
    flex-direction: column;
}
</style>
