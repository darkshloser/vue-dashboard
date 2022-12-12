<script lang="ts">
import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import compHeader from "./components/Header-footer/Header.vue";
import compFooter from "./components/Header-footer/Footer.vue";
import type User from "./types/User";
import "bootstrap/dist/css/bootstrap.min.css";
export default defineComponent({
  name: "App",
  components: {
    compHeader,
    compFooter,
  },
  setup() {},
  mounted() {},
});
</script>

<template>
  <comp-header />
  <div>Content</div>
  <comp-footer />
</template>

<style>
@import "./assets/style.css";
</style>
