<script>
import { mapState } from "pinia";
import { useUserStore } from "../stores/user";

import SidebarLink from "./UI/Sidebar/SidebarLink.vue";

export default {
    name: "Sidebar",
    components: {
        SidebarLink,
    },
    computed: {
        ...mapState(useUserStore, ["playlistsInfo"]),
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

hr {
    border: 1px solid var(--very-dark-ultramarine);
    margin: 15px 5%;
}
</style>
