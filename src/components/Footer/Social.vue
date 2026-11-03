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
    <div class="social">
        <div v-for="item in social">
            <SocialLink :url="item.url" :icon="item.icon" :name="item.name" />
        </div>
    </div>
</template>

<style scoped>
.social {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 2rem;
    padding: 1rem 2rem;
    color: var(--white);
}
</style>
