<script>
export default {
    name: "SidebarLink",
    props: {
        title: String,
        relPath: String,
        isPlaylist: Boolean,
    },
};
</script>

<template>
    <router-link :to="relPath" class="sidebar-link" :class="isPlaylist ? 'playlist-link' : 'link'">
        {{ title }}
    </router-link>
</template>

<style scoped>
.sidebar-link {
    background: #173e56;
    padding: 8px;
    border-radius: 7px;
    color: var(--light-sky);
}

.playlist-link {
    color: var(--medium-ultramarine);
}

a {
    color: inherit;
    text-decoration: none;
}
</style>
