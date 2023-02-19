import { defineStore } from "pinia";

export const usePlayerStore = defineStore("player", {
    state: () => {
        return { nowPlayingIndex: -1, nowPlayingInfo: null, isPlaying: false, queue: [] };
    },
});
