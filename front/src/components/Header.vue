<script>
export default {
    name: "Header",
};
</script>

<template>
    <header><h1 id="header-title">App</h1></header>
</template>

<style scoped>
header {
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

#header-title {
    font-size: 38px;
}
</style>
