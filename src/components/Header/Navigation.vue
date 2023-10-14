<script setup>
import NavigationLink from './NavigationLink.vue'

const nav = [
    {
        page: "Blog",
        link: "/",
        active: false
    },
    {
        page: "About",
        link: "/about",
        active: false
    },
    {
        page: "Avatars",
        link: "/avatars",
        active: true
    },
    {
        page: "Renders",
        link: "/renders",
        active: false
    },
    {
        page: "Templates",
        link: "/templates",
        active: false
    },
    {
        page: "Tutorials",
        link: "/tutorials",
        active: false
    },
    {
        page: "PSD Downloads",
        link: "/psd",
        active: false
    }
]
</script>

<template>
    <nav id="navigation" class="border-b-4 border-stizza">
        <ul class="flex flex-col list-none p-0">
            <NavigationLink v-for="item in nav" :page="item.page" :link="item.link" :active="item.active" />
        </ul>
    </nav>
</template>
