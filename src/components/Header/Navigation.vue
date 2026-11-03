<script setup>
import NavigationLink from './NavigationLink.vue'

const nav = [
    {
        page: "Blog",
        link: "/"
    },
    {
        page: "About",
        link: "/about"
    },
    {
        page: "Avatars",
        link: "/avatars"
    },
    {
        page: "Renders",
        link: "/renders"
    },
    {
        page: "Templates",
        link: "/templates"
    },
    {
        page: "Tutorials",
        link: "/tutorials"
    },
    {
        page: "PSD Downloads",
        link: "/psd"
    }
]
</script>

<template>
    <nav id="navigation">
        <ul>
            <NavigationLink v-for="item in nav" :key="item.link" :page="item.page" :link="item.link" />
        </ul>
    </nav>
</template>

<style scoped>
nav {
    border-bottom: 4px solid var(--stizza);
}

ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
}
</style>
