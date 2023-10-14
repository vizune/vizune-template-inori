<script setup>
    const props = defineProps({
        url: String,
        icon: String,
        name: String
    })
</script>
<template>
    <a :href="url" target="_blank" :title="name" class="text-toadstool hover:text-white">
        <svg  class="icon icon-lg">
            <use :xlink:href="`#${icon}`"></use>
        </svg>
    </a>
</template>