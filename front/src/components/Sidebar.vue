<script>
import { mapState } from "pinia";
import { useUserStore } from "../stores/user";

import SidebarLink from "./SidebarLink.vue";

export default {
    name: "Sidebar",
    components: {
        SidebarLink,
    },
    methods: {
        logoutMethod() {
            localStorage.removeItem("currentUserId");
            router.push({ path: "/login" });
        },
    },
    computed: {
        ...mapState(useUserStore, ["playlistsInfo", "userInfo"]),
    },
};
</script>

<template>
    <div id="sidebar">
        <div id="sidebar-profile-tab" class="sidebar-tab">
            <div id="sidebar-profile-block">
                <h3 class="sidebar-profile-text">{{ userInfo?.login }}</h3>
                <button @click="logoutMethod" id="logout-btn">Log out</button>
            </div>
        </div>
        <hr />
        <div id="sidebar-links-tab" class="sidebar-tab">
            <SidebarLink title="Search" relPath="/search" :isPlaylist="false"></SidebarLink>
        </div>
        <hr />
        <div id="sidebar-playlists-tab" class="sidebar-tab">
            <SidebarLink
                v-for="playlist in playlistsInfo"
                :key="playlist.id"
                :relPath="`/playlist/${playlist.id}`"
                :title="playlist.title"
                :isPlaylist="true"
            ></SidebarLink>
        </div>
    </div>
</template>

<style scoped>
#sidebar {
    background: var(--dark-ultramarine);
    padding: 10px;
}

.sidebar-tab {
    display: flex;
    flex-direction: column;
    gap: 7px;
}

#sidebar-profile-block {
    display: flex;
    align-items: center;
    gap: 10px;
    background: #173e56;
    padding: 8px;
    border-radius: 7px;
}

.sidebar-profile-text {
    color: #76b5d9;
}

#logout-btn {
    background: #a3cee6;
}

hr {
    border: 1px solid var(--very-dark-ultramarine);
    margin: 15px 5%;
}
</style>
