<template>
  <div id="root">
    <SidebarMenu class="sidebar" />
    <RouterView class="router-view" />
  </div>
</template>

<script lang="ts">
import { RouterView } from "vue-router";
import SidebarMenu from "../../components/Navbar/SidebarMenu.vue";
</script>

<style scoped lang="scss">
#root {
  display: grid;
  grid-template-areas: "sidebar router-view";
  // grid-template-columns: auto 1fr;
  font-family: sans-serif;
  align-self: stretch;
  align-content: safe center;
}
.sidebar {
  grid-area: "sidebar";
}
.router-view {
  grid-area: "router-view";
  padding: 1rem;
}
</style>
