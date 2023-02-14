<script>
import SidebarLink from "./UI/Sidebar/SidebarLink.vue";

export default {
    name: "Sidebar",
    components: {
        SidebarLink,
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
                title="Playlist"
                relPath="/playlist/PLI3qsl2pruhDW1QnKL6xLe8c06-821r7u"
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
