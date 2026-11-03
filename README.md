# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Pages and routing

Routing uses [Vue Router](https://router.vuejs.org/). `App.vue` holds the layout (header, navigation, footer) and the current page is rendered inside it.

```
src/
├── router.js      ← list of routes
└── pages/
    ├── Home.vue
    ├── About.vue
    └── NotFound.vue   ← shown for any URL without a route
```

To add a page:

1. Create a component in `src/pages`, e.g. `Renders.vue`.
2. Import it in `src/router.js` and add a route: `{ path: '/renders', component: Renders }`.
3. Add a link in `src/components/Header/Navigation.vue` (use the same path). The link for the current page is highlighted automatically.

URLs use hash mode (`/#/about`) so the built site works on any static host, such as GitHub Pages or Neocities, with no server setup. If your host can redirect every URL to `index.html`, swap `createWebHashHistory()` for `createWebHistory()` in `src/router.js` to get clean URLs.
