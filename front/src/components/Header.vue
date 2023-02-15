<script>
export default {
    name: "Header",
    props: {
        title: {
            type: String,
            default: "Spoopify",
        },
    },
};
</script>

<template>
    <header>
        <h1 id="header-title">{{ title }}</h1>
    </header>
</template>

<style scoped>
header {
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
}

#header-title {
    font-size: 38px;
}
</style>
