<script>
export default {
    name: "PlaylistItem",
    props: {
        itemData: Object,
    },
};
</script>

<template>
    <div class="playlist-item">
        <img v-bind:src="itemData.thumbnail.url" :alt="itemData.title" class="item-image" />
        <h4 class="item-title">{{ itemData.title }}</h4>
        <p class="item-duration">{{ itemData.duration_formatted }}</p>
        <input type="button" value="D" class="item-download-btn" />
    </div>
</template>

<style scoped>
.playlist-item {
    height: 60px;
    display: grid;
    grid-template-columns: auto 1fr auto auto;
    gap: 15px;
    align-items: center;
    padding: 10px 20px;
    background: var(--playlist-item-color);
    border-radius: 10px;
}

.item-image {
    height: 40px;
    border-radius: 5px;
}

.item-duration {
    justify-self: end;
}

.item-download-btn {
    min-width: 28px;
}
</style>
