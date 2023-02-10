<script>
import PlaylistInput from "./PlaylistInput.vue";

export default {
    name: "PlaylistSearch",
    components: {
        PlaylistInput,
    },
};
</script>

<template>
    <div id="playlist-search">
        <h2 id="playlist-search-title">Search Playlist</h2>
        <PlaylistInput></PlaylistInput>
    </div>
</template>

<style scoped>
#playlist-search {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
}

#playlist-search-title {
    text-align: center;
}
</style>
