<script>
import Player from "./Player.vue";

export default {
    name: "Footer",
    components: {
        Player,
    },
};
</script>

<template>
    <footer>
        <Player></Player>
    </footer>
</template>

<style scoped>
footer {
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
