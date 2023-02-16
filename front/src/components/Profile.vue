<script>
import router from "../router/index";
import { useUserStore } from "../stores/user";

import Header from "./Header.vue";

export default {
    name: "Profile",
    components: {
        Header,
    },
    data() {
        return {
            currentUserId: localStorage.getItem("currentUserId"),
            currentUserInfo: null,
        };
    },
    methods: {
        logoutMethod() {
            localStorage.removeItem("currentUserId");
            router.push({ path: "/login" });
        },
        changeMethod() {},
    },
    mounted() {
        const userStore = useUserStore();

        this.currentUserInfo = userStore.userInfo;
    },
};
</script>

<template>
    <div id="profile">
        <Header title="Profile"></Header>
        <div id="profile-subblock">
            <div id="user-info-block">
                <div id="user-avatar-subblock">
                    <img src="https://avatars.githubusercontent.com/u/75713653" id="user-avatar-image" />
                </div>
                <h2 id="user-fullname">{{ currentUserInfo?.name + " " + currentUserInfo?.surname }}</h2>
                <h3 id="user-login">{{ currentUserInfo?.login }}</h3>
                <div id="btns-subblock">
                    <button @click="changeMethod" id="change-btn">Change</button>
                    <button @click="logoutMethod" id="logout-btn">Log out</button>
                </div>
            </div>
            <div id="user-playlists-block">
                <h3>Playlists:</h3>
                <div class="playlist"></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
#profile-subblock {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 8%;
    margin-top: 50px;
    padding: 0px 10%;
}

#user-info-block,
#user-playlists-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #3286bb;
    padding: 25px 35px;
    border-radius: 10px;
}

#user-avatar-subblock {
    width: 50%;
    margin-bottom: 10px;
}

#user-avatar-image {
    width: 100%;
    border-radius: 10%;
}

#playlists-block {
    margin-top: 5px;
}

#btns-subblock {
    display: flex;
    gap: 10px;
    margin-top: 10px;
}

.playlist {
    background: #266790;
}
</style>
