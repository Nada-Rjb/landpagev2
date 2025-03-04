<template>
  <div class="freature">
    <section class="section" data-padding="compact">
      <div class="wrapper flow">
        <h1 class="section-title">تسوق حسب الفئات</h1>

        <!-- Swiper for more than 4 items -->
        <div v-if="CollectionsArray.length" class="itemcenter">
          <swiper
            :pagination="{ el: '.swiper-pagination', clickable: true }"
            :slidesPerView="slidesPerView"
            :space-between="20"
            :modules="modules"
            :breakpoints="{
              1024: { slidesPerView: 4 }, // Large screens (1024px and above) → 5 slides
              768: { slidesPerView: 3 }, // Medium screens (768px - 1023px) → 3 slides
              0: { slidesPerView: 2 }, // Small screens (below 768px) → 2 slides
            }"
            class="equal-coulmns itemcenter"
          >
            <swiper-slide
              v-for="(card, index) in CollectionsArray"
              :key="index"
            >
              <div class="card">
                <img :src="`https://erp.elfateh.online${card.image}`" alt="" />

                <h3 class="card--title">{{ card.item_group_name }}</h3>
              </div>
            </swiper-slide>
            <div class="swiper-pagination"></div>
          </swiper>
        </div>
        <p v-else>Loading categories...</p>
      </div>
    </section>
  </div>
</template>

<script>
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue"; // Import Swiper and SwiperSlide
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const slidesPerView = 3;
    return {
      modules: [Navigation, Pagination, Scrollbar, A11y],
      slidesPerView,
    };
  },
  props: {
    CollectionsArray: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.card {
  display: flex;

  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-block: 1rem;
  background-color: var(--card-title-color);
  overflow: hidden;
  img {
    width: 70%;
    cursor: pointer;
  }
}
.card img:hover {
  transform: scale(1.2);
}

.card--title {
  font-size: var(--card-title-font-size, var(--font-size-regular));
  color: var(--card-title-color, var(--text-brand));
  text-align: center;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
