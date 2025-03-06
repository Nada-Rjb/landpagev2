<template>
  <div class="feature">
    <section class="section" data-padding="compact">
      <div class="wrapper flow">
        <h2 class="section-title">المنتجات</h2>

        <!-- Display only the current page of products -->
        <div class="grid-auto-fill">
          <div class="card" v-for="card in itemPerPage" :key="card.idx">
            <img
              :src="`https://erp.elfateh.online${card.website_image}`"
              alt=""
            />
            <!-- Show Discount Badge When on Sale -->
            <!-- <div v-if="card.sale === 1" class="discount-badge">
              خصم {{ card.descound }}%
            </div> -->

            <div class="cardinfo">
              <h3 class="card--title">{{ card.description }}</h3>
              <p v-if="card.sale === 1" class="discounted-price">
                <span class="new-price">
                  {{ discountedPrice(card) }}
                </span>
                <span class="currency">جنيه</span>
                <span class="old-price">
                  <span class="strike">{{ card.price_list_rate }}</span>
                </span>
                <span class="discount-text">خصم {{ card.descound }}%</span>
              </p>

              <!-- Show Normal Price if Not on Sale -->

              <p v-else class="new-price">
                {{ card.price_list_rate }} <span class="currency"> جنيه </span>
              </p>
            </div>

            <p
              v-if="card.freedelivery"
              class="Delivery"
              :class="{ 'fade-in-out': true, hidden: !showDelivery }"
            >
              توصيل مجاني 🚚
            </p>
            <p v-else class="hidden">🚚 توصيل غير متاح</p>
          </div>
        </div>

        <!-- Pagination Controls -->
        <div class="pagination">
          <button @click="prevPage" :disabled="currentPage === 1">
            السابق
          </button>
          <span>من</span>
          <button @click="nextPage" :disabled="currentPage === totalPage">
            التالى
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    WebsiteItemsArray: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 12,
      showDelivery: true,
    };
  },
  computed: {
    totalPage() {
      //rount to pig number
      console.log(
        "fdsvsfdvd",
        Math.ceil(this.WebsiteItemsArray.length / this.itemsPerPage)
      );
      return Math.ceil(this.WebsiteItemsArray.length / this.itemsPerPage);
    },
    //Extracts the correct slice of products based on the currentPage.
    itemPerPage() {
      //for array start with 0 (1-1)*12=0 in first page start with 0
      const startindex = (this.currentPage - 1) * this.itemsPerPage;
      //in the first page put array from index 0 to index 0+12
      return this.WebsiteItemsArray.slice(
        startindex,
        startindex + this.itemsPerPage
      );
    },
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.totalPage) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    discountedPrice(item) {
      return item.price_list_rate * (1 - item.descound / 100).toFixed(2);
    },
  },
  mounted() {
    // Toggle `showDelivery` every 2 seconds
    setInterval(() => {
      this.showDelivery = !this.showDelivery;
    }, 2000);
  },
};
</script>

<style lang="scss" scoped>
.card {
  align-items: center;
  text-align: center;
  height: 100%;
  display: grid;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    object-position: center;
    aspect-ratio: 1/1;
  }
  .cardinfo {
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
    justify-content: center;
  }
  .card--title {
    font-size: 1.1rem;
    margin: 0 0 1.5rem 0;
    text-align: start;
    font-weight: normal;
  }
  p {
    margin: 0;
    word-wrap: break-word;
  }
  .Delivery {
    font-size: 18px;
    color: green;
    font-weight: bold;
    margin-block-start: auto;
    transition: opacity 0.8s ease-in-out, transform 0.8s ease-in-out;
  }
  .fade-in {
    opacity: 1;
    transform: translateY(0);
  }
  .hidden {
    opacity: 0;
    transform: translateY(10px); /* Moves up when hidden */
  }

  .discounted-price {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 16px;
  }

  .new-price {
    font-weight: bold;
    color: #333;
    font-size: 18px;
  }

  .currency {
    font-weight: normal;
    color: #333;
  }

  .old-price {
    color: gray;
  }

  .strike {
    text-decoration: line-through;
    font-size: 14px;
    color: gray;
  }

  .discount-text {
    color: green;
    font-weight: bold;
    font-size: 14px;
  }
}
</style>
