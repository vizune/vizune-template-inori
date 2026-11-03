<script setup>
import Widget from './Widget.vue';
import Social from './Social.vue';
import Affiliates from './Affiliates.vue';

</script>

<template>
    <footer id="Footer">
        <Widget heading="Affiliates">
            <Affiliates />
        </Widget>
        <Widget heading="Social">
            <Social />
        </Widget>
    </footer>
</template>

<style scoped>
footer {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    width: 100%;
    background-color: var(--dark);
    border-bottom: 4px solid var(--toadstool);
}

@media (min-width: 768px) {
    footer {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}
</style>
