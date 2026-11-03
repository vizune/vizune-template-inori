<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    publishDate: {
        type: String,
        required: true
    },
    imageDimensions: {
        type: String,
        required: true
    },
    fileSize: {
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
        <h2><span v-for="text in title.split(/: (.*)/s)">{{ text }}</span></h2>
        <img :src="asset" class="post-image" v-if="asset" :alt="`Thumbnail of ${title}`" />
        <div class="post-meta">
            <p><strong>Publish Date:</strong> {{ publishDate }}</p>
            <p><strong>Dimensions:</strong> {{ imageDimensions }}</p>
            <p><strong>File Size:</strong> {{ fileSize }}</p>
        </div>
        <div class="post-actions">
          <a :href="downloadUrl" target="_blank" class="button">
                <div class="button-content">
                    <div class="button-label">
                        <span>Download</span>
                        <svg class="icon" style="height: 1.15rem">
                            <use xlink:href="#new-tab"></use>
                        </svg>
                    </div>
                    <svg class="icon">
                        <use xlink:href="#download"></use>
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
  margin-bottom: 0.75rem;
  text-align: left;
  background-color: var(--light-grey);
}

h2 {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 0.25rem;
  margin-bottom: 0;
  padding-top: 1rem;
  padding-left: 1rem;
  font-size: 1.125rem;
  font-weight: 700;
  border-top: 4px solid var(--hibiscus);
}

.post-image {
  margin-bottom: 0.25rem;
}

.post-meta {
  padding: 0.75rem;
  color: var(--white);
  background-color: var(--dark);
}

.post-meta p {
  margin-bottom: 0;
}

.post-actions {
  display: flex;
  justify-content: center;
  margin-top: 0.25rem;
}

.button {
  width: 100%;
}
</style>
