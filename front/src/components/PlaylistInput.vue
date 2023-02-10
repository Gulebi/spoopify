<script>
export default {
    name: "PlaylistInput",
};
</script>

<template>
    <div id="playlist-input">
        <input type="text" id="playlist-input" placeholder="Playlist URL" />
        <input type="button" value="Search" id="playlist-btn" />
    </div>
</template>

<style scoped>
#playlist-input {
    display: flex;
    justify-content: center;
    gap: 7px;
}

input {
    height: 32px;
    border-radius: 8px;
}

#playlist-input {
    width: 350px;
}

#playlist-btn {
    width: 150px;
}
</style>
