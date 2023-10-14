<script setup>
import PatternHeading from '../PatternHeading.vue'

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    publishDate: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    series: {
        type: String,
        required: true
    },
    character: {
        type: String,
        required: true
    },
    demoUrl: {
        type: String,
        required: true
    },
    downloadUrl: {
        type: String,
        required: true
    },
    asset: {
        type: String
    }
})
</script>

<template>
    <div class="text-left mb-6 flex flex-col h-full">
        <PatternHeading>{{ title }}</PatternHeading>
        <img :src="asset" class="mb-1" v-if="asset" />
        <div class="bg-dark text-white grow flex flex-col gap-1 py-3 px-5 justify-center">
            <p class="mb-0"><strong>Publish Date:</strong> {{ publishDate }}</p>
            <p v-if="category" class="mb-0"><strong>Category:</strong> {{ category }}</p>
            <p v-if="series" class="mb-0"><strong>Series:</strong> {{ series }}</p>
            <p v-if="character" class="mb-0"><strong>Character:</strong> {{ character }}</p>
        </div>
        <div class="flex flex-col md:flex-row lg:flex-col xl:flex-row justify-center gap-1 mt-1">
            <a :href="demoUrl" target="_blank" class="button w-full">
                <div class="flex justify-between items-center">
                    <div class="flex">
                        <span>Demo</span>
                        <svg class="icon ml-2" style="height: 1.15rem">
                            <use xlink:href="#new-tab"></use>
                        </svg>
                    </div>
                    <svg class="icon">
                        <use xlink:href="#display"></use>
                    </svg>
                </div>
            </a>
            <a :href="downloadUrl" target="_blank" class="button w-full">
                <div class="flex justify-between items-center">
                    <div class="flex">
                        <span>Source code</span>
                        <svg class="icon ml-2" style="height: 1.15rem">
                            <use xlink:href="#new-tab"></use>
                        </svg>
                    </div>
                    <svg class="icon" style="height: 1.75rem">
                        <use xlink:href="#code"></use>
                    </svg>
                </div>
            </a>
        </div>
    </div>
</template>