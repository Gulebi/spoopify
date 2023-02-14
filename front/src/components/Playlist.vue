<script>
import getInfoService from "../services/getInfo.service";

import PlaylistItem from "./PlaylistItem.vue";

const infoService = new getInfoService();

export default {
    name: "Playlist",
    components: {
        PlaylistItem,
    },
    data() {
        return {
            playlistId: this.$route.params.id,
            playlistData: null,
        };
    },
    created() {
        infoService.playlistInfoById(this.playlistId).then((res) => {
            this.playlistData = res.data;
            console.log(res);
        });
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
