<script>
import PlaylistItem from "./PlaylistItem.vue";

export default {
    name: "Playlist",
    props: {
        playlistData: Object,
    },
    components: {
        PlaylistItem,
    },
};
</script>

<template>
    <div id="playlist">
        <h2 id="playlist-title">Playlist</h2>
        <div id="playlist-items">
            <PlaylistItem
                v-for="itemData in playlistData?.videos"
                :key="itemData.id"
                :itemData="itemData"
            ></PlaylistItem>
        </div>
    </div>
</template>

<style scoped>
#playlist {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

#playlist-items {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

#playlist-title {
    text-align: center;
}
</style>
