<script>
export default {
    props: {
        color: { type: String, default: "#000000" },
    },
};
</script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" :fill="color">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M7 9v6h4l5 5V4l-5 5H7z" />
    </svg>
</template>
