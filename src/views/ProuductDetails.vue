<template>
  <div>
    <section class="section">
      <div class="wrapper flow" data-width="wide">
        <div class="detailes">
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
              <label for="quantity">الكمية:</label>
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
              <button class="buy-btn">اشترى الان</button>
            </div>
            <div>
              <!-- Delivery Info -->
              <div class="delivery-info">
                <p>توصيل مجاني</p>
                <hr />
                <p>سياسة إرجاع خلال 30 يومًا</p>
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
.detailes {
  display: grid;
  gap: 2rem;
  grid-template-areas:
    "card-one"
    "card-two"
    "card-three";

  @media (min-width: 1040px) {
    grid-template-columns: 400px 500px 170px;
    grid-template-areas: "card-one    card-two  card-three   ";
  }
  .title-grid {
    grid-area: card-one;
    display: flex;
    flex-direction: column;
  }
  ////style product detaiels

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
    @media (max-width: 1038px) {
      flex-direction: row; /* Horizontal row on small screens */
      justify-content: space-between;
      gap: 10px;
    }

    @media (min-width: 1040px) {
      flex-direction: column; /* Vertical layout on large screens */
      justify-content: space-between;

      img {
        height: 138px;
      }
    }
    img {
      width: 100%;
      height: 138px;
    }
  }
}
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
.quantity-selection {
  background-color: antiquewhite;
  display: flex;
  align-items: center;
  padding: 15px;
  color: black;

  button {
    display: flex;
    background-color: white;
    border: black 1px solid;
    font-size: 15px;
    align-items: center;
    width: 25px;
    height: 25px;
    cursor: pointer;
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
      width: 70px;
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
  }
}
.delivery-info {
  margin-top: 15px;
  font-size: 1.2rem;
  border: 2px solid rgb(80, 169, 96);
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0px;
  border-radius: 8px;
  background-color: #fff;
}

.delivery-info p {
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 10px 15px; /* Add padding for spacing */
}
.delivery-info p:first-child::before {
  content: "🚚";
  margin-left: 10px;
  font-size: 1.5rem;
}
.delivery-info p:last-child::before {
  content: "↩️";
  margin-left: 10px;
  font-size: 1.5rem;
}

.delivery-info hr {
  border-top: 2px solid rgb(80, 169, 96);
  width: 100%;
}
</style>
