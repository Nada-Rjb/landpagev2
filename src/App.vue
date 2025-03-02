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
