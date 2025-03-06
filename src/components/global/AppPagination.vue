<template>
  <div class="pagination">
    <!-- when click go to prev page & at page one disaple button  -->
    <button @click="prevPage" :disabled="currentPage === 1" class="bold">
      &lt;
    </button>
    <!-- First Page -->
    <button
      v-if="totalPages > 1"
      @click="changePage(1)"
      :class="{ active: currentPage === 1 }"
    >
      1
    </button>
    <!-- Ellipsis Before -->
    <span v-if="currentPage > 4">...</span>

    <!-- page bumbersss  -->
    <button
      v-for="page in numberPages"
      :key="page"
      @click="changePage(page)"
      :class="{ active: currentPage === page }"
    >
      {{ page }}
    </button>
    <!-- Ellipsis After -->
    <span v-if="currentPage < totalPages - 3">...</span>
    <!-- Last Page -->
    <button
      v-if="totalPages > 3"
      @click="changePage(totalPages)"
      :class="{ active: currentPage === totalPages }"
    >
      {{ totalPages }}
    </button>
    <!-- appear when pages > 4 -->
    <button
      @click="nextPage"
      :disabled="currentPage === totalPages"
      class="bold"
    >
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
        this.changePage(this.currentPage + 1);
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.changePage(this.currentPage - 1);
      }
    },
    //
    //make page in child = page in parent set value in child
    changePage(page) {
      if (page !== this.currentPage) {
        // Emit an event to update the parent
        this.$emit("update:modelValue", page);

        // Smoothly scroll to the section title
        this.$emit("scroltotitle");
      }
    },
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
    //create array for number of page
    numberPages() {
      let pages = [];
      let startPage = Math.max(2, this.currentPage - 1);
      let endPage = Math.min(this.totalPages - 1, this.currentPage + 1);
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
      return pages;
    },
  },
};
</script>
<style scoped>
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
button {
  padding: 8px 12px;
  background: white;
  cursor: pointer;
  border-radius: 5px;
  border: none;
}
button.active {
  background: rgb(1, 97, 38);
  color: white;
  border: 1px solid green;
  font-size: 20px;
}
button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
span {
  padding: 8px;
  font-size: 14px;
}
.bold {
  font-weight: 900;
}
</style>
