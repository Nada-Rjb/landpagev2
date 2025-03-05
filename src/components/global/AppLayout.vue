<template>
  <div class="layout">
    <div>
      <app-nav></app-nav>
      <cart-drawer></cart-drawer>
      <main class="content">
        <slot></slot>
      </main>
      <app-footer></app-footer>
    </div>
  </div>
</template>
<script>
import AppNav from "./AppNav.vue";
import CartDrawer from "./CartDrawer.vue";
import AppFooter from "./AppFooter.vue";
export default {
  data: () => ({
    drawer: false,
  }),
  components: {
    AppNav,
    CartDrawer,
    AppFooter,
  },
};
</script>
