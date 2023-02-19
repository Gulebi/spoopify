<script>
import { mapState } from "pinia";
import { watch } from "vue";
import { useUserStore } from "../stores/user";

import PlaylistItem from "./PlaylistItem.vue";

export default {
    name: "Playlist",
    components: {
        PlaylistItem,
    },
    data() {
        return {
            playlistId: this.$route.params.id,
        };
    },
    mounted() {
        watch(
            () => this.$route.params.id,
            () => {
                this.playlistId = this.$route.params.id;
            }
        );
    },
    computed: {
        ...mapState(useUserStore, ["playlistsInfo"]),
    },
};
</script>

<template>
    <div id="playlist">
        <h2 id="playlist-title">Playlist</h2>
        <div id="playlist-items">
            <PlaylistItem
                v-for="(itemData, index) in playlistsInfo[this.playlistId]?.videos"
                :key="itemData.id"
                :itemData="itemData"
                :playlistId="playlistId"
                :index="index"
            ></PlaylistItem>
        </div>
    </div>
</template>

<style scoped>
#playlist {
    overflow: auto;
    display: flex;
    flex-direction: column;
    padding: 15px 5%;
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
