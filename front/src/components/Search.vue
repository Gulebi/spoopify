<script>
import SearchInput from "./UI/Search/SearchInput.vue";

export default {
    name: "Search",
    components: {
        SearchInput,
    },
};
</script>

<template>
    <div id="search">
        <h2 id="search-title">Search Playlist</h2>
        <SearchInput></SearchInput>
    </div>
</template>

<style scoped>
#search {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px 5%;
    gap: 8px;
}

#search-title {
    text-align: center;
}
</style>
