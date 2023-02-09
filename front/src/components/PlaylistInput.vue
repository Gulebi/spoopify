<script>
export default {
    name: "PlaylistInput",
};
</script>

<template>
    <div id="playlist-input-block">
        <input type="text" id="playlist-input" placeholder="Playlist URL" />
        <input type="button" value="Search" id="playlist-btn" />
    </div>
</template>

<style scoped>
#playlist-input-block {
    display: flex;
    justify-content: center;
    gap: 7px;
}

input {
    height: 32px;
    border-radius: 8px;
}

#playlist-input {
    width: 250px;
}

#playlist-btn {
    width: 100px;
}
</style>
