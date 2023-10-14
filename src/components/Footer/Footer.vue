<script setup>
import Widget from './Widget.vue';
import Social from './Social.vue';
import Affiliates from './Affiliates.vue';

</script>

<template>
    <footer id="Footer" class="bg-dark w-full grid grid-cols-1 md:grid-cols-2 border-b-4 border-toadstool">
        <Widget heading="Affiliates">
            <Affiliates />
        </Widget>
        <Widget heading="Social">
            <Social />
        </Widget>
    </footer>
</template>
