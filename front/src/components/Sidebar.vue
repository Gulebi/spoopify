<script>
import { useUserStore } from "../stores/user";

import SidebarLink from "./UI/Sidebar/SidebarLink.vue";

export default {
    name: "Sidebar",
    components: {
        SidebarLink,
    },
    data() {
        return {
            currentUserInfo: null,
        };
    },
    mounted() {
        const userStore = useUserStore();

        this.currentUserInfo = userStore.userInfo;
    },
};
</script>

<template>
    <div id="sidebar">
        <div id="sidebar-links-tab" class="sidebar-tab">
            <SidebarLink title="Home" relPath="/home" :isPlaylist="false"></SidebarLink>
            <SidebarLink title="Profile" relPath="/profile" :isPlaylist="false"></SidebarLink>
            <SidebarLink title="Search" relPath="/search" :isPlaylist="false"></SidebarLink>
        </div>
        <hr />
        <div id="sidebar-playlists-tab" class="sidebar-tab">
            <SidebarLink
                v-for="playlistId in currentUserInfo?.playlists"
                :key="playlistId"
                :relPath="`/playlist/${playlistId}`"
                title="Playlist"
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

hr {
    border: 1px solid var(--very-dark-ultramarine);
    margin: 15px 5%;
}
</style>
