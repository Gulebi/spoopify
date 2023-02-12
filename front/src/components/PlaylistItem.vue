<script>
import { usePlayerStore } from "../stores/player";

const API_URL = import.meta.env.VITE_API_URL;

export default {
    name: "PlaylistItem",
    props: {
        itemData: Object,
    },
    setup() {
        const playerStore = usePlayerStore();

        return { changeNP: playerStore.changeNP };
    },
    methods: {
        downloadFile(url) {
            window.open(`${API_URL}/api/getAudioFile/?url=${url}`);
        },
        play(url) {
            this.changeNP(`${API_URL}/api/getAudioFile/?url=${url}`);
        },
    },
};
</script>

<template>
    <div class="playlist-item">
        <button class="item-play-btn" @click="play(itemData.url)">Play</button>
        <img v-bind:src="itemData.thumbnail.url" :alt="itemData.title" class="item-image" />
        <a class="item-title" :href="itemData.url">{{ itemData.title }}</a>
        <p class="item-duration">{{ itemData.duration_formatted }}</p>
        <button class="item-download-btn" @click="downloadFile(itemData.url)">D</button>
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
