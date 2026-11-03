<template>
    <h2 class="pattern-heading">
        <span>
            <slot />
        </span>
    </h2>
</template>

<style scoped>
.pattern-heading {
    position: relative;
    z-index: 10;
    margin-bottom: 0.25rem;
    padding: 0.75rem;
    color: var(--white);
    background-color: var(--dark);
}
.pattern-heading:before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background-image: url('/mask.png');
}
span {
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 500;
    letter-spacing: 0.05em;
    text-transform: uppercase;
}
</style>