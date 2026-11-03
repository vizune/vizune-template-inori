<script setup>
import Header from './components/Header/Header.vue'
import Logo from './components/Header/Logo.vue'
import Navigation from './components/Header/Navigation.vue'
import Footer from './components/Footer/Footer.vue'
</script>

<template>
  <div class="site-container">
    <div class="site-top">
      <Header />
      <div class="site-sidebar">
        <Logo />
        <Navigation />
      </div>
    </div>
    <main class="site-main">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.site-top {
  display: flex;
}

.site-sidebar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 21.25rem;
  background-color: var(--stizza);
}

.site-main {
  flex-grow: 1;
  padding: 3rem 1rem 6rem;
  background: var(--white) url('/lace.png') bottom repeat-x;
}

@media (min-width: 1024px) {
  .site-main {
    padding-right: 3rem;
    padding-left: 3rem;
  }
}
</style>
