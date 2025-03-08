<template>
  <AppLayout>
    <router-view />
  </AppLayout>
</template>

<script>
import AppLayout from "./components/global/AppLayout.vue";
import "@/assets/reset.css";

export default {
  components: {
    AppLayout,
  },
};
</script>
<style>
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
