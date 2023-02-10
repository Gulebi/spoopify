<script>
import getInfoService from "../services/getInfo.service";

import PlaylistSearch from "./PlaylistSearch.vue";
import Playlist from "./Playlist.vue";

const infoService = new getInfoService();

export default {
    name: "Main",
    components: {
        PlaylistSearch,
        Playlist,
    },
    data() {
        return {
            playlistData: null,
        };
    },
    methods: {
        loadPlaylistData() {
            infoService.playlistInfo().then((res) => {
                this.playlistData = res;
                console.log(res);
            });
        },
        loadPlaylistFullInfo() {
            infoService.playlistFullInfo().then((res) => {
                this.playlistData = res;
                console.log(res);
            });
        },
    },
    created() {
        infoService.playlistInfo().then((res) => {
            this.playlistData = res.data;
            console.log(res);
        });
    },
};
</script>

<template>
    <main>
        <PlaylistSearch></PlaylistSearch>
        <Playlist :playlistData="playlistData"></Playlist>
    </main>
</template>

<style scoped>
main {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 30px 20%;
    background: var(--main-color);
}
</style>
