<script setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])

</script>

<template>
    <div class="flex flex-wrap gap-4 justify-center">
        <select class="p-3 pr-8 h-14 w-full md:w-auto" :value="modelValue" @change="$emit('update:modelValue', $event.target.value)">
            <slot></slot>
        </select>
        <button @click="$emit('update:modelValue', '')" :disabled="modelValue.length === 0">Clear filter</button>
    </div>
</template>