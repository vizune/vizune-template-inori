<script setup>
</script>

<template>
    <header id="header">
        <img src="/header.png" alt="Banner image featuring Inori from Guilty Crown" width="1200" height="500" />
    </header>
</template>

<style scoped>
header {
    height: 32rem;
    border-bottom: 4px solid var(--stizza);
}

img {
    height: 100%;
    object-fit: cover;
    object-position: 65% 50%;
}

@media (min-width: 1024px) {
    img {
        object-position: center;
    }
}
</style>
