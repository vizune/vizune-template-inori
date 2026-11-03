<script setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])

</script>

<template>
    <div class="filter-dropdown">
        <select class="filter-select" :value="modelValue" @change="$emit('update:modelValue', $event.target.value)">
            <slot></slot>
        </select>
        <button @click="$emit('update:modelValue', '')" :disabled="modelValue.length === 0">Clear filter</button>
    </div>
</template>

<style scoped>
.filter-dropdown {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
}

.filter-select {
    width: 100%;
    height: 3.5rem;
    padding: 0.75rem 2rem 0.75rem 0.75rem;
}

@media (min-width: 768px) {
    .filter-select {
        width: auto;
    }
}
</style>
