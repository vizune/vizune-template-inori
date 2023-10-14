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
    <div class="grid grid-cols-3 lg:grid-cols-4 justify-center gap-4 my-6 px-6">
        <a v-for="link in affiliates" :href="link.url" target="_blank">
            <img :src="link.button" :alt="`Affiliate: ${link.name} button`" class="border-2 border-white hover:border-toadstool" />
        </a>
    </div>
</template>