<template>
  <div>
    <section class="section background-extra-dark section-title">
      <div class="wrapper" data-width="wide">
        <div
          class="equal-coulmns"
          data-gap="large"
          data-align="center"
          v-for="(card, index) in limitedCards"
          :key="index"
        >
          <div class="flow font-size-lg">
            <h2>{{ card.title }}</h2>
            <p>
              {{ card.description }}
            </p>
            <a class="button" href="#"
              >اعرف المزيد
              <span class="visually-hidden">عن صناعه الجبن فى المصنع </span>
            </a>
          </div>
          <div>
            <img :src="`https://erp.elfateh.online${card.image}`" alt="" />
          </div>
        </div>
      </div>
    </section>
    <!-- <section class="section">
      <div class="wrapper" data-width="wide">
        <div class="equal-coulmns" data-gap="large" data-align="center">
          <div>
            <img src="assets\imges\c1.webp" alt="" />
          </div>
          <div>
            <div class="flow font-size-lg">
              <h2 class="section-title">
                <p>ابدأ رحلة <span class="text-brand">الطعم المميز</span></p>
              </h2>
              <p>
                اكتشف روعة المخبوزات مع الأجبان والزبدة الطازجة. نقدم لك منتجات
                مخصصة لتعزيز جودة ونكهة المخبوزات والمعجنات الخاصة بك
              </p>
              <a class="button" href="#">ابدأ الرحلة </a>
            </div>
          </div>
        </div>
      </div>
    </section> -->
  </div>
</template>
<script>
export default {
  setup() {
    return {};
  },
  props: {
    ShowDetailsArray: {
      type: Array,
      required: true,
    },
  },
  computed: {
    limitedCards() {
      console.log("ShowDetailsArray before filtering:", this.ShowDetailsArray);
      return (this.ShowDetailsArray || [])
        .filter((item) => item.layout_type === "Right Image - Left Text")
        .slice(0, 1);
    },
  },
};
</script>
