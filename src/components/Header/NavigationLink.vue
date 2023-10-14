<script setup>
const props = defineProps({
    page: String,
    link: String,
    active: Boolean
})
</script>

<template>
    <li class="text-left">
        <a 
            :href="link" 
            class="hover:bg-white text-white focus:bg-white hover:text-stizza block px-8 py-4"
            :class="active ? 'bg-dark' : 'bg-stizza'">
            <span class="uppercase tracking-wider text-sm md:text-lg whitespace-nowrap">{{ page }}</span>
        </a>
    </li>
</template>