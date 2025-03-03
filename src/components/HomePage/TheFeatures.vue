<template>
  <div class="freature">
    <section class="section" data-padding="compact">
      <div class="wrapper flow">
        <h2 class="section-title">جودة الألبان لتلبية احتياجات عملك</h2>
        <p>
          في شركة الفاتح، نؤمن بأن المكونات عالية الجودة هي سر نجاح أي وصفة.
        </p>

        <!-- Grid Layout if 4 or fewer items -->
        <div v-if="limitedCards.length <= 4">
          <div class="equal-coulmns">
            <div
              class="card"
              v-for="(card, index) in limitedCards"
              :key="index"
            >
              <img :src="`https://erp.elfateh.online${card.image}`" alt="" />
              <h3 class="card--title">{{ card.title }}</h3>
              <p>{{ card.description }}</p>
            </div>
          </div>
        </div>

        <!-- Swiper for more than 4 items -->
        <swiper
          v-else
          :pagination="{ el: '.swiper-pagination', clickable: true }"
          :space-between="20"
          :effect="'fade'"
          :fadeEffect="{
            crossFade: true,
          }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          :slidesPerView="slidesPerView"
          :modules="modules"
          :autoplay="{
            delay: 2000,
            disableOnInteraction: false,
          }"
          :breakpoints="{
            750: { slidesPerView: 3 },
            0: { slidesPerView: 1 },
          }"
          class="equal-coulmns"
        >
          <swiper-slide
            v-for="(card, index) in limitedCards"
            :key="index"
            class="equal-coulmns"
          >
            <div class="card">
              <img :src="`https://erp.elfateh.online${card.image}`" alt="" />
              <h3 class="card--title">{{ card.title }}</h3>
              <p>{{ card.description }}</p>
            </div>
          </swiper-slide>
          <div class="swiper-pagination"></div>
        </swiper>
      </div>
    </section>
  </div>
</template>

<script>
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue"; // Import Swiper and SwiperSlide
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay"; // Import the CSS for autoplay

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    const slidesPerView = 3; // Adjust this based on your layout or container size

    return {
      modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
      onSwiper,
      onSlideChange,
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
<style lang="scss"></style>
