<template>
  <div>
    <section class="section">
      <div class="wrapper flow" data-width="wide">
        <div class="faq-bento">
          <!-- Card 1 -->
          <div class="title-grid">
            <div class="product-details">
              <h1>{{ peoduct.web_item_name }}</h1>
              <p>{{ peoduct.price_list_rate }}</p>
              <div class="rating">
                <span class="stars">★★★★★</span>
                <span class="review">(150 Reviews)</span>
              </div>
              <p class="description">{{ peoduct.web_item_name }}</p>
            </div>
            <div class="quantity-selection">
              <label for="quantity">الكمية :</label>
              <button class="quantity-option">1</button>
              <button class="quantity-option">2</button>
              <button class="quantity-option selected">5</button>
              <button class="quantity-option">10</button>
              <button class="quantity-option">20</button>
            </div>
            <div class="buy-section">
              <div class="quantity">
                <button>-</button>
                <input type="text" value="2" />
                <button>+</button>
              </div>
              <button>اشترى الان</button>
              <button>مفضل</button>
            </div>
            <div>
              <!-- Delivery Info -->
              <div class="delivery-info">
                <p>🚚 توصيل مجاني</p>
                <p>↩️ سياسة إرجاع خلال 30 يومًا</p>
              </div>
            </div>
            <p>{{ peoduct.short_description }}</p>
          </div>
          <div class="big-img-grid">
            <img
              :src="`https://erp.elfateh.online${peoduct.website_image}`"
              alt=""
            />
          </div>
          <div class="smal-img-grid">
            <img
              :src="`https://erp.elfateh.online${peoduct.website_image}`"
              alt=""
            />
            <img
              :src="`https://erp.elfateh.online${peoduct.website_image}`"
              alt=""
            />
            <img
              :src="`https://erp.elfateh.online${peoduct.website_image}`"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data: () => ({
    peoduct: {
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
      thumbnail: "/files/61e29ec7c3ecd14c64a8adb0_butter_small.webp",
      website_warehouse: null,
      on_backorder: 0,
      short_description: null,
      web_long_description: null,
      show_tabbed_section: 0,
      ranking: 0,
      website_content: null,
      price_list_rate: 135.0,
    },
  }),
};
</script>
<style scoped lang="scss">
.faq-bento {
  --card-title-color: var(--text-high-contrast);
  display: grid;
  gap: 2rem 2rem;
  grid-template-areas:
    "card-one"
    "card-two"
    "card-three"
    "card-four";
  grid-template-rows: auto;

  @media (width > 600px) {
    grid-template-areas:
      "card-one   card-two "
      "card-one  card-two ";
  }

  @media (width>900px) {
    grid-template-columns: 400px 500px 170px;
    grid-template-areas: "card-one    card-two  card-three   ";
  }
  .title-grid {
    grid-area: card-one;
    display: flex;
    flex-direction: column;
  }
  ////style product detaiels
  .product-details {
    background-color: rgb(187, 216, 166);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 0.5rem;
    border-bottom: #333 solid 2px;
    margin-bottom: 0.5rem;
    padding: 15px;

    h1 {
      font-size: 24px;
      font-weight: bold;
    }
    .price {
      font-size: 20px;
      color: #333;
      font-weight: bold;
    }
  }

  .big-img-grid {
    grid-area: card-two;
    img {
      height: 500px;
      object-fit: cover;
    }
  }
  .smal-img-grid {
    grid-area: card-three;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    img {
      width: 100%;
      height: 138px;
    }
  }
}
</style>
