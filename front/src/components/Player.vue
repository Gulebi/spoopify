<script>
import { usePlayerStore } from "../stores/player";

export default {
    name: "Player",
    data() {
        return {
            url: null,
            isPlaying: false,
            duration: 0,
            currentTime: 0,
            currentVolume: 50,
            isLoop: false,
        };
    },
    setup() {
        const playerStore = usePlayerStore();

        return { playerStore };
    },
    methods: {
        play() {
            this.url = this.playerStore.nowPlaying;

            if (!this.isPlaying) this.$refs.player.play();
            else this.$refs.player.pause();

            this.isPlaying = !this.isPlaying;
        },
        loaded() {
            this.duration = this.$refs.player.duration;
            this.$refs.player.volume = this.currentVolume / 100;
        },
        timeupdate() {
            this.currentTime = this.$refs.player.currentTime;
        },
        rewind() {
            this.$refs.player.currentTime = this.currentTime;
        },
        volume() {
            this.$refs.player.volume = this.currentVolume / 100;
        },
        loop() {
            if (!this.isLoop) this.$refs.player.loop = true;
            else this.$refs.player.loop = false;

            this.isLoop = !this.isLoop;
        },
        toMins(sec) {
            sec = Math.round(sec);
            return (sec - (sec %= 60)) / 60 + (9 < sec ? ":" : ":0") + sec;
        },
    },
};
</script>

<template>
    <div id="player">
        <audio :src="url" ref="player" @loadedmetadata="loaded" @timeupdate="timeupdate"></audio>
        <button @click="play">{{ !isPlaying ? "Play" : "Pause" }}</button>
        <div id="player-track-block">
            <p>{{ toMins(currentTime) }}</p>
            <input type="range" v-model="currentTime" :max="duration" @change="rewind" id="player-track" />
            <p>{{ toMins(duration) }}</p>
        </div>
        <div id="player-track-block">
            <input type="range" v-model="currentVolume" :max="100" @change="volume" id="volume-track" />
        </div>
        <button @click="loop">Loop: {{ isLoop }}</button>
    </div>
</template>

<style scoped>
#player,
#player-track-block,
#volume-track-block {
    display: flex;
    align-items: center;
}

#player {
    gap: 15px;
}

input[type="range"] {
    padding: 0;
}
</style>
