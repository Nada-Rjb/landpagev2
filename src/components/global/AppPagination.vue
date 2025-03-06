<template>
  <div class="pagination">
    <!-- when click go to prev page & at page one disaple button  -->
    <button @click="prevPage" :disabled="currentPage === 1">&lt;</button>
    <span>...</span>
    <button @click="nextPage" :disabled="currentPage === totalPages">
      &gt;
    </button>
  </div>
</template>
<script>
export default {
  //take from parent
  props: {
    totalPages: {
      type: Number,
      required: true,
    },
    //currentPage
    modelValue: {
      type: Number,
      required: true,
    },
  },
  mounted() {
    console.log("tottttal paaagee", this.totalPages);
    console.log("modelValue (currentPage)", this.modelValue);
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    //
    //make page in child = page in parent set value in child
    // changePage(page) {
    //   if (page !== this.currentPage) {
    //     //emit an event to update the parent
    //     this.$emit("update:modelValue", page);
    //   }
    // },
  },
  computed: {
    //from parent
    currentPage: {
      get() {
        console.log(" Getting currentPage:", this.modelValue);
        return this.modelValue;
      },
      //The user clicks a different page number in the child component
      set(value) {
        console.log("🚀 Setting currentPage:", value);
        this.$emit("update:modelValue", value);
      },
    },
  },
};
</script>
