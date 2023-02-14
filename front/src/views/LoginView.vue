<script>
import Login from "../components/Login.vue";

export default {
    name: "LoginView",
    components: {
        Login,
    },
};
</script>

<template>
    <div id="container">
        <Login></Login>
    </div>
</template>

<style scoped>
#container {
    height: 100vh;
    display: flex;
    flex-direction: column;
}
</style>
