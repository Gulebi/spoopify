<script>
import { mapState } from "pinia";
import { watch } from "vue";
import { useUserStore } from "../stores/user";

import PlaylistItem from "./PlaylistItem.vue";
import Header from "./Header.vue";

export default {
    name: "Playlist",
    components: {
        Header,
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
        <Header :title="playlistsInfo[this.playlistId]?.title || 'Playlist'"></Header>
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
    gap: 15px;
}

#playlist-items {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 15px 8%;
}

#playlist-title {
    text-align: center;
}
</style>
