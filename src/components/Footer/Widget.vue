<script setup>
import PatternHeading from '../PatternHeading.vue';
const props = defineProps({
    heading: String,
})
</script>

<template>
    <div class="w-full">
        <PatternHeading class="text-center text-xxl font-bold text-white mb-5">{{ heading }}</PatternHeading>
        <div class="px-6 pb-6">
            <slot />
        </div>
    </div>
</template>
