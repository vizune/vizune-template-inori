<script setup>
const props = defineProps({
    page: String,
    link: String,
    active: Boolean
})
</script>

<template>
    <li>
        <a 
            :href="link" 
            class="nav-link"
            :class="{ active }">
            <span>{{ page }}</span>
        </a>
    </li>
</template>

<style scoped>
li {
    text-align: left;
}

.nav-link {
    display: block;
    padding: 1rem 2rem;
    color: var(--white);
    background-color: var(--stizza);
}

.nav-link.active {
    background-color: var(--dark);
}

.nav-link:hover,
.nav-link:focus {
    background-color: var(--white);
}

.nav-link:focus {
    color: var(--toadstool);
}

.nav-link:hover {
    color: var(--stizza);
}

span {
    font-size: 0.875rem;
    line-height: 1.25rem;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    white-space: nowrap;
}

@media (min-width: 768px) {
    span {
        font-size: 1.125rem;
        line-height: 1.75rem;
    }
}
</style>
