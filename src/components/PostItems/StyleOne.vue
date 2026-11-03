<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    description: {
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
    }
})
</script>

<template>
    <div class="post">
        <img :src="thumbnail" role="presentation" class="post-thumbnail" />
        <div class="post-body">
            <h2>{{ title }}</h2>
            <p class="post-date">{{ publishDate }}</p>
            <p class="post-description">{{ description }}</p>
            <router-link :to="`/${category}/${slug}`" class="button">
                <div class="button-content">
                    <span>Read more</span>
                    <svg class="icon">
                        <use xlink:href="#rightArrow"></use>
                    </svg>
                </div>
            </router-link>
        </div>
    </div>
</template>

<style scoped>
.post {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 0.5rem;
    border: 4px solid var(--hibiscus);
}

.post-thumbnail {
    width: 16rem;
    height: 16rem;
    margin: 0 auto;
}

.post-body {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-top: 1rem;
    text-align: left;
}

h2 {
    margin-bottom: 0.25rem;
    color: var(--dark);
    font-weight: 700;
    text-transform: none;
}

.post-date {
    font-weight: 700;
}

.post-description {
    flex-grow: 1;
}

@media (min-width: 1280px) {
    .post {
        flex-direction: row;
    }

    .post-thumbnail {
        margin: 0;
    }

    .post-body {
        margin-top: 0;
        margin-left: 1rem;
    }
}
</style>
