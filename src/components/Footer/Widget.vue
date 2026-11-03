<script setup>
import PatternHeading from '../PatternHeading.vue';
const props = defineProps({
    heading: String,
})
</script>

<template>
    <div class="widget">
        <PatternHeading class="widget-heading">{{ heading }}</PatternHeading>
        <div class="widget-content">
            <slot />
        </div>
    </div>
</template>

<style scoped>
.widget {
    width: 100%;
}

/* h2 prefix so this beats PatternHeading's own margin */
h2.widget-heading {
    margin-bottom: 1.25rem;
    font-weight: 700;
    text-align: center;
}

.widget-content {
    padding: 0 1.5rem 1.5rem;
}
</style>
