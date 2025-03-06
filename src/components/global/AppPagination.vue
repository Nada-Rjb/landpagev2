<template>
  <div class="pagination">
    <button>&lt;</button>
    <span>...</span>
    <button>&gt;</button>
  </div>
</template>
<script>
export default {
  //take from parent
  props: {
    totalPages: {
      type: Number,
      require: true,
    },
    modelValue: {
      type: Number,
      require: true,
    },
  },
  mounted() {
    console.log("tottttal paaagee", this.totalPages);
    console.log("modelValue (currentPage)", this.modelValue);
  },
};
</script>
