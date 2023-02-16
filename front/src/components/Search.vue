<script>
import userServiceClass from "@/services/user.service";
import infoServiceClass from "@/services/getInfo.service";

import Header from "./Header.vue";

const userService = new userServiceClass();
const infoService = new infoServiceClass();

export default {
    name: "Search",
    components: {
        Header,
    },
    data() {
        return {
            playlistURL: null,
            playlistData: null,
            currentUserId: localStorage.getItem("currentUserId"),
        };
    },
    methods: {
        getPlaylistInfo() {
            infoService.playlistInfoByURL(this.playlistURL).then((res) => {
                this.playlistData = res.data;
                console.log("Received playlist data!");
                console.log(res);
            });
        },
        addPlaylist() {
            userService
                .addPlaylist(this.currentUserId, { title: this.playlistData.title, id: this.playlistData.id })
                .then((res) => {});
        },
    },
};
</script>

<template>
    <div id="search">
        <Header title="Search"></Header>
        <div id="search-content-block">
            <div id="search-subblock">
                <h2 id="search-title">Search Playlist</h2>
                <div id="search-input-subblock">
                    <input type="text" v-model="playlistURL" id="search-input" placeholder="Playlist URL" />
                    <button @click="getPlaylistInfo" id="search-btn">Search</button>
                </div>
                <div id="search-result-block" v-if="playlistData">
                    <img :src="playlistData?.thumbnail.url" id="result-thumbnail-image" alt="Playlist Thumbnail" />
                    <a :href="playlistData?.url">
                        <h3 id="result-title">{{ playlistData?.title }}</h3>
                    </a>
                </div>
                <button id="search-add-playlist-btn" v-if="playlistData">Add Playlist</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
#search-content-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    gap: 10px;
}

#search-subblock {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #3286bb;
    padding: 25px 35px;
    border-radius: 10px;
    gap: 10px;
}

#search-result-block {
    display: flex;
    align-items: center;
    gap: 10px;
    background: #266790;
    padding: 10px;
    border-radius: 7px;
}

#search-input-subblock {
    display: flex;
    justify-content: center;
    gap: 7px;
}

input,
button {
    height: 32px;
    border-radius: 8px;
}

#search-input {
    width: 280px;
}

#search-btn {
    width: 100px;
}

#result-thumbnail-image {
    height: 40px;
    border-radius: 5px;
}
</style>
