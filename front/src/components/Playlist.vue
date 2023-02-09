<script>
import PlaylistItem from "./PlaylistItem.vue";

export default {
    name: "Playlist",
    components: {
        PlaylistItem,
    },
};
</script>

<template>
    <div id="playlist">
        <h2 id="playlist-title">Playlist</h2>
        <PlaylistItem></PlaylistItem>
    </div>
</template>

<style scoped>
#playlist {
    display: flex;
    flex-direction: column;
}

#playlist-title {
    text-align: center;
}
</style>
