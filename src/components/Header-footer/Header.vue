<template>
  <header>
    <div class="container clear">
      <div class="logo">
        <img :src="logoIcon" />
      </div>
      <div class="nav">
        <img :src="menuIcon" />
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Logo from "../../assets/images/logo.png";
import Menu from "../../assets/images/menu.png";
export default defineComponent({
  name: "Header",
  components: {},
  setup() {
    const logoIcon = Logo;
    const menuIcon = Menu;
    return { logoIcon, menuIcon };
  },
  mounted() {},
});
</script>
