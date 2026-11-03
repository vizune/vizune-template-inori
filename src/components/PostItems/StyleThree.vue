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
    <div class="post">
        <PatternHeading>{{ title }}</PatternHeading>
        <img :src="asset" class="post-image" v-if="asset" :alt="`Thumbnail of ${title}`" />
        <div class="post-meta">
            <p><strong>Publish Date:</strong> {{ publishDate }}</p>
            <p v-if="category"><strong>Category:</strong> {{ category }}</p>
            <p v-if="series"><strong>Series:</strong> {{ series }}</p>
            <p v-if="character"><strong>Character:</strong> {{ character }}</p>
        </div>
        <div class="post-actions">
            <a :href="demoUrl" target="_blank" class="button">
                <div class="button-content">
                    <div class="button-label">
                        <span>Demo</span>
                        <svg class="icon" style="height: 1.15rem">
                            <use xlink:href="#new-tab"></use>
                        </svg>
                    </div>
                    <svg class="icon">
                        <use xlink:href="#display"></use>
                    </svg>
                </div>
            </a>
            <a :href="downloadUrl" target="_blank" class="button">
                <div class="button-content">
                    <div class="button-label">
                        <span>Source code</span>
                        <svg class="icon" style="height: 1.15rem">
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

<style scoped>
.post {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-bottom: 1.5rem;
    text-align: left;
}

.post-image {
    margin-bottom: 0.25rem;
}

.post-meta {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
    gap: 0.25rem;
    padding: 0.75rem 1.25rem;
    color: var(--white);
    background-color: var(--dark);
}

.post-meta p {
    margin-bottom: 0;
}

.post-actions {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.25rem;
    margin-top: 0.25rem;
}

.button {
    width: 100%;
}

@media (min-width: 768px) {
    .post-actions {
        flex-direction: row;
    }
}

@media (min-width: 1024px) {
    .post-actions {
        flex-direction: column;
    }
}

@media (min-width: 1280px) {
    .post-actions {
        flex-direction: row;
    }
}
</style>
