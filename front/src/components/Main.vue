<script>
import PlaylistSearch from "./PlaylistSearch.vue";
import Playlist from "./Playlist.vue";

export default {
    name: "Main",
    components: {
        PlaylistSearch,
        Playlist,
    },
};
</script>

<template>
    <main>
        <PlaylistSearch></PlaylistSearch>
        <Playlist></Playlist>
    </main>
</template>

<style scoped>
main {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 25px 50px;
    border-radius: 15px;
    background: var(--main-color);
}
</style>
