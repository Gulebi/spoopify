<script>
import router from "../router/index";
import userServiceClass from "../services/user.service";

import Header from "./Header.vue";

const userService = new userServiceClass();

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
    },
    created() {
        userService.getUserInfo(this.currentUserId).then((res) => {
            this.currentUserInfo = res.data;
        });
    },
};
</script>

<template>
    <div id="profile">
        <Header title="Profile"></Header>
        <div id="profile-subblock">
            <div id="user-info-block">
                <h3 id="user-fullname">{{ currentUserInfo?.name + " " + currentUserInfo?.surname }}</h3>
                <h4 id="user-login">{{ currentUserInfo?.login }}</h4>
                <div id="playlists-block">
                    <h4>Playlists:</h4>
                    <div class="playlist"></div>
                </div>
                <button @click="logoutMethod" id="logout-btn">Log out</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
#profile-subblock {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
}

#user-info-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #3286bb;
    padding: 15px 25px;
    border-radius: 10px;
}

#playlists-block {
    margin-top: 5px;
}

#logout-btn {
    margin-top: 10px;
}

.playlist {
    background: #266790;
}
</style>
