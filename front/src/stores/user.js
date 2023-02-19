import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
    state: () => {
        return { userInfo: null, playlistsInfo: {} };
    },
    actions: {
        changeUserInfo(info) {
            this.userInfo = info;
        },
        addPlaylistInfo(info) {
            this.userInfo.playlistsIds.push(info);
        },
        deletePlaylistInfo(info) {
            this.userInfo.playlistsIds = this.userInfo.playlistsIds.filter((id) => id != info);
        },
    },
});
