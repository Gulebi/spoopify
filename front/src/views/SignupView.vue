<script>
import Signup from "../components/Signup.vue";

export default {
    name: "SignupView",
    components: {
        Signup,
    },
};
</script>

<template>
    <div id="container">
        <Signup></Signup>
    </div>
</template>

<style scoped>
#container {
    height: 100vh;
    display: flex;
    flex-direction: column;
}
</style>
