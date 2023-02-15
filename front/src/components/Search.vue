<script>
import Header from "./Header.vue";
import SearchInput from "./UI/Search/SearchInput.vue";

export default {
    name: "Search",
    components: {
        Header,
        SearchInput,
    },
};
</script>

<template>
    <div id="search">
        <Header title="Search"></Header>
        <div id="search-subblock">
            <h2 id="search-title">Search Playlist</h2>
            <SearchInput></SearchInput>
        </div>
    </div>
</template>

<style scoped>
#search-subblock {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    gap: 10px;
}
</style>
