<script>
export default {
    name: "SearchInput",
};
</script>

<template>
    <div id="search-input">
        <input type="text" id="search-input" placeholder="Playlist URL" />
        <input type="button" value="Search" id="search-btn" />
    </div>
</template>

<style scoped>
#search-input {
    display: flex;
    justify-content: center;
    gap: 7px;
}

input {
    height: 32px;
    border-radius: 8px;
}

#search-input {
    width: 350px;
}

#search-btn {
    width: 150px;
}
</style>
