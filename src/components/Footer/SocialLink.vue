<script setup>
    const props = defineProps({
        url: String,
        icon: String,
        name: String
    })
</script>
<template>
    <a :href="url" target="_blank" :title="name" class="social-link">
        <FontAwesomeIcon :icon="icon" class="icon icon-lg" />
    </a>
</template>
<style scoped>
.social-link {
    color: var(--toadstool);
}

.social-link:hover {
    color: var(--white);
}
</style>
