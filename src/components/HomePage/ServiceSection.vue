<template>
  <div>
    <section class="section">
      <div class="wrapper flow" data-width="wide">
        <h2 id="faq" class="section-title">خدماتنا</h2>
        <div class="faq-bento">
          <!-- Card 1 -->
          <div class="card">
            <h3 class="card--title">خدماتنا</h3>
            <p>
              نقدم حلولًا متكاملة للشركات في مجال تصنيع ومعالجة الأجبان، بما في
              ذلك فكيم الجبن الرومي، بشر الجبن، وتنشيره بأعلى معايير الجودة. كما
              نوفر منتجات متنوعة مثل الموزاريلا، البراميلي، الإسطانبولي، والسمن
              الطبيعي، مما يساعد الشركات في قطاع المخابز والصناعات الغذائية على
              تحقيق أعلى كفاءة في الإنتاج.
            </p>
            <button>اطلب خدماتنا</button>
          </div>
          <div class="card">
            <img src="assets\imges\c21.webp" alt="عملية فكيم الجبن" />
            <h3 class="card--title">فكيم الجبن الرومي</h3>
            <p>
              نقوم بعملية فكيم الجبن الرومي باستخدام أحدث تقنيات التفريغ الهوائي
              للحفاظ على جودة وطراوة الجبن.
            </p>
          </div>

          <!-- Card 2 -->
          <div class="card">
            <img src="assets\imges\cheese.jpg" alt="بشر الجبن" />
            <h3 class="card--title">بشر الجبن</h3>
            <p>
              خدمة بشر الجبن بجودة عالية لمساعدتك في تجهيز المخبوزات والأطعمة
              بسهولة وسرعة.
            </p>
          </div>

          <!-- Card 3 -->
          <div class="card">
            <img src="assets\imges\c23.jpg" alt="تنشير الجبن الرومي" />
            <h3 class="card--title">تنشير الجبن الرومي</h3>
            <p>
              تقنية دقيقة لتنشير الجبن الرومي مع الحفاظ على النكهة المميزة
              والجودة المطلوبة.
            </p>
          </div>

          <!-- Card 4 -->
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  props: {
    //get data
    ShowDetailsArray: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style scoped>
.faq-bento {
  --card-title-color: var(--text-high-contrast);
  display: grid;
  gap: 1rem;
  grid-template-areas:
    "card-one"
    "card-two"
    "card-three"
    "card-four";
  @media (width > 600px) {
    grid-template-areas:
      "card-one   card-two "
      "card-three card-four ";
  }
  .card > img {
    height: 100%;
    object-fit: cover;
    /*change position of crop*/
    /*object-position: top left;*/
  }
  @media (width>600px) {
    /*change the order of img in even card */
    .card:nth-child(even) > img {
      order: 3;
    }
  }
  @media (width>900px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      "card-one    card-two    card-four"
      "card-one  card-three  card-four";
  }
  .card:nth-child(1) {
    grid-area: card-one;
    background-color: white;
  }
  .card:nth-child(2) {
    grid-area: card-two;
  }
  .card:nth-child(3) {
    grid-area: card-three;
    @media (width>900px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      img {
        grid-column: 1/2;
        grid-row: 1/3;
      }
    }
  }

  .card:nth-child(4) {
    grid-area: card-four;
  }
}
</style>
