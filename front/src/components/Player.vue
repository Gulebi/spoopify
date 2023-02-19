<script>
import { mapWritableState, mapState } from "pinia";
import { usePlayerStore } from "../stores/player";
import { useUserStore } from "../stores/user";

import PlayArrowIcon from "./Icons/PlayArrowIcon.vue";
import PauseIcon from "./Icons/PauseIcon.vue";
import RepeatIcon from "./Icons/RepeatIcon.vue";
import RepeatOneIcon from "./Icons/RepeatOneIcon.vue";
import VolumeUpIcon from "./Icons/VolumeUpIcon.vue";
import VolumeDownIcon from "./Icons/VolumeDownIcon.vue";
import VolumeOffIcon from "./Icons/VolumeOffIcon.vue";
import VolumeMuteIcon from "./Icons/VolumeMuteIcon.vue";
import SkipPreviousIcon from "./Icons/SkipPreviousIcon.vue";
import SkipNextIcon from "./Icons/SkipNextIcon.vue";
import ShuffleIcon from "./Icons/ShuffleIcon.vue";

const API_URL = import.meta.env.VITE_API_URL;

export default {
    name: "Player",
    components: {
        PlayArrowIcon,
        PauseIcon,
        RepeatIcon,
        RepeatOneIcon,
        VolumeUpIcon,
        VolumeDownIcon,
        VolumeOffIcon,
        VolumeMuteIcon,
        SkipPreviousIcon,
        SkipNextIcon,
        ShuffleIcon,
    },
    data() {
        return {
            url: null,
            duration: 0,
            currentTime: 0,
            currentVolume: 30,
            isLoop: false,
        };
    },
    methods: {
        play() {
            if (!this.isPlaying) this.$refs.player.play();
            else this.$refs.player.pause();
            this.isPlaying = !this.isPlaying;
        },
        loaded() {
            this.$refs.player.play();
            this.duration = this.$refs.player.duration;
            this.$refs.player.volume = this.currentVolume / 100;
        },
        ended() {
            this.next();
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
        previous() {
            this.nowPlayingInfo?.index--;

            this.nowPlayingInfo = this.queue[this.nowPlayingInfo?.index];

            this.url = `${API_URL}/api/getAudioFile/?url=${this.nowPlayingInfo?.url}`;
        },
        next() {
            this.nowPlayingInfo?.index++;

            this.nowPlayingInfo = this.queue[this.nowPlayingInfo?.index];

            this.url = `${API_URL}/api/getAudioFile/?url=${this.nowPlayingInfo?.url}`;
        },
        toMins(sec) {
            sec = Math.round(sec);
            return (sec - (sec %= 60)) / 60 + (9 < sec ? ":" : ":0") + sec;
        },
    },
    mounted() {
        this.emitter.on("play", ({ playlistId, index }) => {
            this.queue = this.playlistsInfo[playlistId]?.videos;

            this.nowPlayingInfo = { ...this.queue[index], index, playlistId };
            this.isPlaying = true;

            this.url = `${API_URL}/api/getAudioFile/?url=${this.nowPlayingInfo?.url}`;
        });
    },
    computed: {
        ...mapWritableState(usePlayerStore, ["isPlaying", "nowPlayingInfo", "queue"]),
        ...mapState(useUserStore, ["playlistsInfo"]),
    },
};
</script>

<template>
    <div id="player" class="full-width">
        <audio :src="url" ref="player" @loadedmetadata="loaded" @timeupdate="timeupdate" @ended="ended"></audio>
        <div id="player-track-info-block">
            <img :src="nowPlayingInfo?.thumbnail.url || '../src/assets/imageIcon.svg'" id="player-track-info-image" />
            <h4>
                {{
                    nowPlayingInfo?.title.length > 50
                        ? nowPlayingInfo?.title.slice(0, 50) + "..."
                        : nowPlayingInfo?.title || "Nothing is playing"
                }}
            </h4>
        </div>

        <div id="player-track-block">
            <div class="player-track-row" id="player-track-btns-row">
                <button :disabled="!nowPlayingInfo">
                    <ShuffleIcon></ShuffleIcon>
                </button>
                <button :disabled="!nowPlayingInfo" @click="previous">
                    <SkipPreviousIcon></SkipPreviousIcon>
                </button>
                <button :disabled="!nowPlayingInfo" @click="play" id="play-btn">
                    <PlayArrowIcon v-if="!isPlaying"></PlayArrowIcon>
                    <PauseIcon v-if="isPlaying"></PauseIcon>
                </button>
                <button :disabled="!nowPlayingInfo" @click="next">
                    <SkipNextIcon></SkipNextIcon>
                </button>
                <button :disabled="!nowPlayingInfo" @click="loop">
                    <RepeatIcon v-if="!isLoop"></RepeatIcon>
                    <RepeatOneIcon v-if="isLoop"></RepeatOneIcon>
                </button>
            </div>
            <div class="player-track-row">
                <p class="player-track-nums">{{ toMins(currentTime) }}</p>
                <input
                    type="range"
                    v-model="currentTime"
                    :max="duration"
                    @change="rewind"
                    id="player-track"
                    class="track"
                />
                <p class="player-track-nums">{{ toMins(duration) }}</p>
            </div>
        </div>
        <div id="volume-track-block">
            <VolumeUpIcon v-if="currentVolume >= 50"></VolumeUpIcon>
            <VolumeDownIcon v-else-if="currentVolume > 0"></VolumeDownIcon>
            <VolumeMuteIcon v-else></VolumeMuteIcon>
            <input type="range" v-model="currentVolume" :max="100" @change="volume" id="volume-track" class="track" />
        </div>
    </div>
</template>

<style scoped>
#player-track-info-block,
#player-track-block,
#volume-track-block,
.player-track-row {
    display: flex;
    align-items: center;
    align-self: center;
}

#player {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}

#player-track-info-block {
    display: flex;
    gap: 10px;
}

#player-track-info-image {
    height: 60px;
    border-radius: 7px;
}

#player-track-block {
    flex-direction: column;
    gap: 7px;
}

#volume-track-block {
    justify-self: end;
}

#player-track-btns-row {
    display: grid;
    grid-template-columns: 1fr 1fr 1.2fr 1fr 1fr;
    gap: 7px;
}

.player-track-row {
    gap: 5px;
}

#player {
    gap: 30px;
}

#player-track {
    width: 320px;
}

#volume-track {
    width: 100px;
}

.player-track-nums {
    font-size: small;
}

.track {
    padding: 0;
    -webkit-appearance: none;
    width: 100%;
    height: 8px;
    border-radius: 5px;
    background: #266790;
    outline: none;
}

.track::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--input-color);
    cursor: pointer;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
}

.track::-webkit-slider-thumb:hover {
    background: var(--input-color-hover);
}
</style>
