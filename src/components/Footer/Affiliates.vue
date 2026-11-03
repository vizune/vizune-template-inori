<script setup>
const affiliates = [
    {
        name: 'Vizune',
        url: 'https://vizune.com/',
        button: '/buttons/vizune-button-01.png'
    },
    {
        name: 'Vizune',
        url: 'https://vizune.com/',
        button: '/buttons/vizune-button-02.png'
    },
    {
        name: 'Vizune',
        url: 'https://vizune.com/',
        button: '/buttons/vizune-button-03.png'
    },
    {
        name: 'Vizune',
        url: 'https://vizune.com/',
        button: '/buttons/vizune-button-04.png'
    },
    {
        name: 'Vizune',
        url: 'https://vizune.com/',
        button: '/buttons/vizune-button-04.png'
    },
    {
        name: 'Vizune',
        url: 'https://vizune.com/',
        button: '/buttons/vizune-button-03.png'
    },
    {
        name: 'Vizune',
        url: 'https://vizune.com/',
        button: '/buttons/vizune-button-02.png'
    },
    {
        name: 'Vizune',
        url: 'https://vizune.com/',
        button: '/buttons/vizune-button-01.png'
    }
]
</script>

<template>
    <div class="affiliates">
        <a v-for="link in affiliates" :href="link.url" target="_blank">
            <img :src="link.button" :alt="`Affiliate: ${link.name} button`" width="88" height="31" />
        </a>
    </div>
</template>

<style scoped>
.affiliates {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    justify-content: center;
    gap: 1rem;
    margin: 1.5rem 0;
    padding: 0 1.5rem;
}

img {
    border: 2px solid var(--white);
}

img:hover {
    border-color: var(--toadstool);
}

@media (min-width: 1024px) {
    .affiliates {
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }
}
</style>
