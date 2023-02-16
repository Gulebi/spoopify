import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
    state: () => {
        return { userInfo: null };
    },
    actions: {
        changeUserInfo(info) {
            this.userInfo = info;
        },
    },
});
