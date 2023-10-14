<template>
    <h2 class="text-white bg-dark mb-1 p-3 relative z-10 before:bg-header-pattern">
        <span class="font-medium uppercase text-xl tracking-wider">
            <slot />
        </span>
    </h2>
</template>

<style scoped>
h2:before {
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
</style>