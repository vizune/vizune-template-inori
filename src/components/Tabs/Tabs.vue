<script setup>
import { useSlots, ref , provide} from 'vue'

const slots = useSlots()
const tabTitles = ref(slots.default().map(tab => tab.props.title))
const selectedTitle = ref(tabTitles.value[0])

provide('selectedTitle', selectedTitle)
</script>

<template>
    <div class="tabs">
        <ul class="flex justify-center items-center gap-4 mb-6 list-none flex-col lg:flex-row p-0 md:border-b-4 md:border-stizza lg:px-4">
            <li
                v-for="title in tabTitles"
                :key="title"
                @click="selectedTitle = title"
                class="grow w-full lg:w-auto"
            >
                <button :class="{ active: selectedTitle === title }" class="w-full relative z-10 py-3 text-left">
                    <span>{{ title }}</span>
                </button>
            </li>
        </ul>
        <slot />
    </div>
</template>

<style scoped>
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

@media (min-width: 1024px) {
    button {
        transform: translateY(4px);
    }
    button.active {
        border-bottom: 4px solid #fff;
    }
}
</style>