<template>
  <div class="layout">
    <div>
      <app-nav></app-nav>
      <cart-drawer></cart-drawer>
      <main class="content">
        <slot></slot>
      </main>
    </div>
  </div>
</template>
<script>
import AppNav from "./AppNav.vue";
import CartDrawer from "./CartDrawer.vue";
export default {
  data: () => ({
    drawer: false,
  }),
  components: {
    AppNav,
    CartDrawer,
  },
};
</script>
