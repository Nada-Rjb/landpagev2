<template>
  <div class="freature">
    <section class="section" data-padding="compact">
      <div class="wrapper flow">
        <h1 class="section-title">تسوق حسب الفئات</h1>
        <hr />
        <!-- Grid Layout if 4 or fewer items -->

        <!-- Swiper for more than 4 items -->
        <swiper
          :pagination="{ el: '.swiper-pagination', clickable: true }"
          :space-between="20"
          :effect="'fade'"
          :fadeEffect="{
            crossFade: true,
          }"
          :slidesPerView="slidesPerView"
          :modules="modules"
          :breakpoints="{
            1024: { slidesPerView: 5 }, // Large screens (1024px and above) → 5 slides
            768: { slidesPerView: 3 }, // Medium screens (768px - 1023px) → 3 slides
            0: { slidesPerView: 2 }, // Small screens (below 768px) → 2 slides
          }"
          class="equal-coulmns"
        >
          <swiper-slide
            v-for="(card, index) in limitedCards"
            :key="index"
            class="equal-coulmns"
          >
            <div>
              <div class="cardimg">
                <img :src="`https://erp.elfateh.online${card.image}`" alt="" />
              </div>
              <div class="card">
                <h3 class="card--title">{{ card.title }}</h3>
              </div>
            </div>
          </swiper-slide>
          <div class="swiper-pagination"></div>
        </swiper>
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
    const slidesPerView = 3; // Adjust this based on your layout or container size

    return {
      modules: [Navigation, Pagination, Scrollbar, A11y],

      slidesPerView,
    };
  },
  props: {
    ShowDetailsArray: {
      type: Array,
      required: true,
    },
  },
  computed: {
    limitedCards() {
      return (this.ShowDetailsArray || [])
        .filter((item) => item.layout_type === "middel-section")
        .slice(0, 6);
    },
  },
};
</script>
<style lang="scss" scoped>
.cardimg {
  padding: 1rem;
  display: flex;

  flex-direction: column;
  gap: var(--card-gap, 1rem);
  border-radius: 20rem 20rem;
  margin-block: 2rem;
  background-color: rgb(218, 217, 217);
  overflow: hidden; /* Ensures image stays inside */

  img {
    object-fit: cover; /* Makes the image fill the container without distortion */
  }
}
.card {
  background-color: rgb(255, 255, 255);

  .card--title {
    font-size: var(--card-title-font-size, var(--font-size-regular));
    color: var(--card-title-color, var(--text-brand));
    text-align: center;
  }
}
</style>
