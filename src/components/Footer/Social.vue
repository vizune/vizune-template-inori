<script setup>
import SocialLink from './SocialLink.vue';

const social = [
    {
        url: "https://github.com/vizune",
        icon: "github",
        name: "Github"
    },
    {
        url: "https://www.deviantart.com/vizune",
        icon: "deviantart",
        name: "Deviant Art"
    },
    {
        url: "https://www.instagram.com/vizune_/",
        icon: "instagram",
        name: "Instagram"
    },
    {
        url: "https://www.linkedin.com/in/sasha-r-547a2b57",
        icon: "linkedin",
        name: "LinkedIn"
    },
    {
        url: "https://discordapp.com/users/vizune.",
        icon: "discord",
        name: "Discord"
    },
    {
        url: "https://www.pinterest.co.uk/vizune/",
        icon: "pinterest",
        name: "Pinterest"
    },
    {
        url: "https://open.spotify.com/user/1149827575",
        icon: "spotify",
        name: "Spotify"
    },
    {
        url: "https://steamcommunity.com/id/vizune",
        icon: "steam",
        name: "Steam"
    },
    {
        url: "https://twitter.com/Vizune_",
        icon: "twitter",
        name: "Twitter"
    }
]
</script>

<template>
    <div class="grid grid-cols-5 gap-8 text-white py-4 px-8">
        <div v-for="item in social">
            <SocialLink :url="item.url" :icon="item.icon" :name="item.name" />
        </div>
    </div>
</template>