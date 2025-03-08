<template>
  <div>
    <section class="section">
      <div class="wrapper flow" data-width="wide">
        <div class="detailes">
          <!-- Card 1 -->
          <div class="title-grid">
            <div class="product-details">
              <h1>{{ SingleProduct?.web_item_name || "Loading..." }}</h1>
              <p>{{ product.price_list_rate }}</p>
              <div class="rating">
                <span class="stars">★★★★★</span>
                <span class="review">(150 Reviews)</span>
              </div>
              <p class="description">{{ product.web_item_name }}</p>
            </div>
            <div class="quantity-selection">
              <label for="quantity">الكمية:</label>
              <button class="quantity-option">1</button>
              <button class="quantity-option">2</button>
              <button class="quantity-option selected">5</button>
              <button class="quantity-option">10</button>
              <button class="quantity-option">20</button>
            </div>
            <div class="buy-section">
              <div class="quantity">
                <button @click="quantity > 1 ? quantity-- : false">-</button>
                <input type="number" v-model="quantity" min="1" />
                <button @click="quantity++">+</button>
              </div>
              <button class="buy-btn">اشترى الان</button>
            </div>
            <p>{{ product.short_description || "" }}</p>
          </div>
          <div class="big-img-grid">
            <img
              :src="
                tab ? tab : `https://erp.elfateh.online${product.website_image}`
              "
              alt="big image"
            />
          </div>

          <div class="smal-img-grid">
            <img
              v-for="(img, index) in product.thumbnail"
              :key="index"
              :src="`https://erp.elfateh.online${img}`"
              alt="small image"
              @click="swpImg(index)"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { productstore } from "@/stores/ShowDetails";

import { mapActions, mapState } from "pinia";
export default {
  methods: {
    ...mapActions(productstore, ["getsingleProduct"]),

    swpImg(index) {
      if (!this.product) return;

      let currentBigImage =
        this.tab || `https://erp.elfateh.online${this.product.website_image}`;
      let clickedSmallImage = `https://erp.elfateh.online${this.product.thumbnail[index]}`;

      this.tab = clickedSmallImage;

      // Swap images in thumbnails
      this.product.thumbnail[index] = currentBigImage.replace(
        "https://erp.elfateh.online",
        ""
      );
    },
  },
  async mounted() {
    await this.getsingleProduct(this.$route.params.productid);
  },
  computed: {
    ...mapState(productstore, ["SingleProduct"]),
  },
  data() {
    return {
      tab: "",
      quantity: 1,
      product: {
        name: "WEB-ITM-0015",
        owner: "Administrator",
        creation: "2025-03-06 16:06:26.847472",
        modified: "2025-03-06 16:06:43.505957",
        modified_by: "Administrator",
        docstatus: 0,
        idx: 1,
        naming_series: "WEB-ITM-.####",
        web_item_name: "زبدة فيرن بالقطعة 1ك",
        route: "سمن/زبدة-فيرن-بالقطعة-1ك-86lzq",
        has_variants: 0,
        variant_of: null,
        published: 1,
        freedelivery: 0,
        item_code: "زبدة فيرن بالقطعة 1ك",
        item_name: "زبدة فيرن بالقطعة 1ك",
        item_group: "سمن",
        stock_uom: "وحدة",
        descound: 0.0,
        service: 0,
        sale: 0,
        custom_flash_deals: 0,
        description: "زبدة فيرن بالقطعة 1ك",
        brand: null,
        website_image: "/files/61e29ec7c3ecd14c64a8adb0_butter.webp",
        website_image_alt: null,
        slideshow: null,
        thumbnail: [
          "/files/Mysteries_of_Honey_2-1-600x330_small.jpg",
          "/files/Mysteries_of_Honey_2-1-600x330_small.jpg",
          "/files/Mysteries_of_Honey_2-1-600x330_small.jpg",
        ],
        website_warehouse: null,
        on_backorder: 0,
        short_description: null,
        web_long_description: null,
        show_tabbed_section: 0,
        ranking: 0,
        website_content: null,
        price_list_rate: 135.0,
      },
    };
  },
};
</script>

<style scoped lang="scss">
.detailes {
  display: grid;
  gap: 2rem;
  grid-template-areas:
    "card-one"
    "card-two"
    "card-three";

  @media (min-width: 1040px) {
    grid-template-columns: 170px 400px 500px;
    grid-template-areas: "card-three card-two card-one";
  }
  .title-grid {
    grid-area: card-one;
    display: flex;
    flex-direction: column;
  }

  .big-img-grid {
    grid-area: card-two;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      height: 500px;
      object-fit: cover;
    }
  }

  .smal-img-grid {
    grid-area: card-three;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    @media (min-width: 1040px) {
      flex-direction: column;
      img {
        height: 138px;
        cursor: pointer;
        gap: 40px;
      }
    }

    img {
      width: 100%;
      height: 138px;
      cursor: pointer;
    }
  }
}

.product-details {
  background-color: rgb(187, 216, 166);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-bottom: #333 solid 2px;
  margin-bottom: 0.5rem;
  padding: 15px;

  h1 {
    font-size: 24px;
    font-weight: bold;
  }
}

.quantity-selection {
  background-color: antiquewhite;
  display: flex;
  align-items: center;
  padding: 15px;
  color: black;

  button {
    background-color: white;
    border: black 1px solid;
    font-size: 15px;
    width: 25px;
    height: 25px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-inline: 0.5rem;
    border-radius: 0.3rem;
  }
}

.buy-section {
  display: flex;
  align-items: center;
  gap: 4rem;
  margin-top: 15px;
  margin-bottom: 15px;
  border-radius: 4px;
  padding: 15px;

  .quantity {
    border-radius: 0.3rem;
    border: 1px solid #ccc;

    button {
      padding: 6px 12px;
      border: none;
      background-color: #f0f0f0;
      cursor: pointer;
      font-weight: bold;
      font-size: 20px;
      border-radius: 0.2rem;
      width: 40px;
    }

    input {
      width: 50px;
      text-align: center;
      border: none;
    }
  }
  .buy-btn {
    background-color: red;
    color: white;
    padding: 10px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 165px;
  }
}
</style>
