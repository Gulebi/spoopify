<script>
import { usePlayerStore } from "../stores/player";
import { mapState } from "pinia";

import PlayArrowIcon from "./Icons/PlayArrowIcon.vue";
import PauseIcon from "./Icons/PauseIcon.vue";
import FileDownloadIcon from "./Icons/FileDownloadIcon.vue";

const API_URL = import.meta.env.VITE_API_URL;

export default {
    name: "PlaylistItem",
    components: {
        PlayArrowIcon,
        PauseIcon,
        FileDownloadIcon,
    },
    props: {
        itemData: Object,
        playlistId: String,
        index: Number,
    },
    methods: {
        downloadFile(url) {
            window.open(`${API_URL}/api/getAudioFile/?url=${url}`);
        },

        play() {
            this.emitter.emit("play", { playlistId: this.playlistId, index: this.index });
        },
    },
    computed: {
        ...mapState(usePlayerStore, ["isPlaying", "nowPlayingIndex"]),
    },
};
</script>

<template>
    <div class="playlist-item">
        <button class="item-play-btn" @click="play()">
            <PlayArrowIcon v-if="nowPlayingIndex != index"></PlayArrowIcon>
            <PauseIcon v-if="nowPlayingIndex == index"></PauseIcon>
        </button>
        <img v-bind:src="itemData.thumbnail.url" :alt="itemData.title" class="item-image" />
        <a class="item-title" :href="itemData.url">{{ itemData.title }}</a>
        <p class="item-duration">{{ itemData.duration_formatted }}</p>
        <button class="item-download-btn" @click="downloadFile(itemData.url)">
            <FileDownloadIcon></FileDownloadIcon>
        </button>
    </div>
</template>

<style scoped>
.playlist-item {
    height: 60px;
    display: grid;
    grid-template-columns: auto auto 1fr auto auto;
    gap: 15px;
    align-items: center;
    padding: 10px 20px;
    background: var(--playlist-item-color);
    border-radius: 10px;
}

.item-title {
    font-weight: 700;
    text-decoration: none;
}

.item-image {
    height: 40px;
    border-radius: 5px;
}

.item-duration {
    justify-self: end;
}

.item-download-btn {
    min-width: 28px;
}
</style>
