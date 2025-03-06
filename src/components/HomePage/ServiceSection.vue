<template>
  <div>
    <section class="section">
      <div class="wrapper flow" data-width="wide">
        <h2 id="faq" class="section-title">خدماتنا</h2>
        <div class="faq-bento">
          <!-- Card 1 -->
          <div class="card">
            <h3 class="card--title"></h3>
            <p>
              نقدم حلولًا متكاملة للشركات في مجال تصنيع ومعالجة الأجبان، بما في
              ذلك فكيم الجبن الرومي، بشر الجبن، وتنشيره بأعلى معايير الجودة. كما
              نوفر منتجات متنوعة مثل الموزاريلا، البراميلي، الإسطانبولي، والسمن
              الطبيعي، مما يساعد الشركات في قطاع المخابز والصناعات الغذائية على
              تحقيق أعلى كفاءة في الإنتاج.
            </p>
            <button>اطلب خدماتنا</button>
          </div>

          <!-- Card 2 -->
          <div v-for="card in WebsiteServiceArray" :key="card.id" class="card">
            <img
              :src="`https://erp.elfateh.online${card.website_image}`"
              alt=""
            />
            <h3 class="card--title">{{ card.web_item_name }}</h3>
            <p>{{ card.short_description }}</p>
          </div>
          <!-- Card 3 -->

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
    WebsiteServiceArray: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style scoped lang="scss">
.card {
  border-radius: var(--border-radius-1);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
}
.card:hover {
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);
}
.faq-bento {
  --card-title-color: var(--text-high-contrast);
  display: grid;
  gap: 2rem 1.5rem;
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
    width: 100%; /* Make the image responsive */
    aspect-ratio: 16 / 9; /* Adjust this ratio as needed */
    object-fit: cover; /* Ensures the whole image fits without cropping */
    transition: transform 0.3s ease-in-out;
  }

  .card > img:hover {
    transform: scale(1.1);
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
      "card-one    card-one     card-four"
      "card-two  card-three  card-four";
  }
  .card:nth-child(1) {
    grid-area: card-one;
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
  button {
    background-color: var(--clr-brand-500);
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    color: white;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    width: 40%;
  }
  button:hover {
    background-color: #fabd92;
    transform: scale(1.05);
  }
}
</style>
