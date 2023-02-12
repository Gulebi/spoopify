import { defineStore } from "pinia";

export const usePlayerStore = defineStore("player", {
    state: () => {
        return { nowPlaying: null };
    },
    actions: {
        changeNP(link) {
            this.nowPlaying = link;
        },
    },
});
