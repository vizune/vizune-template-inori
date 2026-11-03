<script setup>
import { useSlots, ref , provide} from 'vue'

const slots = useSlots()
const tabTitles = ref(slots.default().map(tab => tab.props.title))
const selectedTitle = ref(tabTitles.value[0])

provide('selectedTitle', selectedTitle)
</script>

<template>
    <div class="tabs">
        <ul>
            <li
                v-for="title in tabTitles"
                :key="title"
                @click="selectedTitle = title"
            >
                <button :class="{ active: selectedTitle === title }">
                    <span>{{ title }}</span>
                </button>
            </li>
        </ul>
        <slot />
    </div>
</template>

<style scoped>
ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
    padding: 0;
    list-style: none;
}
li {
    flex-grow: 1;
    width: 100%;
}
button:before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
}
button {
    position: relative;
    z-index: 10;
    width: 100%;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    text-align: left;
    background-color: var(--stizza);
    border: 4px solid var(--stizza);
    transform: translateY(4px);
    color: #fff;
}
button:hover {
    color: #fff;
    text-decoration: underline;
}
button.active {
    background-color: #fff;
    color: var(--stizza);
}

button.active:hover {
    color: var(--stizza);
}

@media (min-width: 768px) {
    ul {
        border-bottom: 4px solid var(--stizza);
    }
}

@media (min-width: 1024px) {
    ul {
        flex-direction: row;
        padding: 0 1rem;
    }
    li {
        width: auto;
    }
    button {
        transform: translateY(4px);
    }
    button.active {
        border-bottom: 4px solid #fff;
    }
}
</style>
