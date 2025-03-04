<template>
  <div>
    <section class="section background-extra-dark section-title">
      <div class="wrapper" data-width="wide">
        <transition name="fade" mode="out-in">
          <div
            class="equal-coulmns"
            data-gap="large"
            data-align="center"
            v-if="currentCard"
            :key="currentCard.title"
          >
            <div class="flow font-size-lg">
              <h2>{{ currentCard.title }}</h2>
              <p>
                {{ currentCard.description }}
              </p>
              <a class="button" href="#"
                >{{ currentCard.button }}
                <span class="visually-hidden">عن صناعه الجبن فى المصنع </span>
              </a>
            </div>
            <div>
              <img
                :src="`https://erp.elfateh.online${currentCard.image}`"
                alt=""
              />
            </div>
          </div>
        </transition>
      </div>
    </section>
  </div>
</template>
<script>
import { ref, computed, onMounted } from "vue";
export default {
  props: {
    //get data
    ShowDetailsArray: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const currentIndex = ref(0);
    // Filter only the required cards
    const limitedCards = computed(() => {
      console.log("ShowDetailsArray before filtering:", props.ShowDetailsArray);
      return (props.ShowDetailsArray || [])
        .filter((item) => item.layout_type === "Right Image - Left Text")
        .slice(0, 6);
    });
    // Get the current card from the filtered list
    const currentCard = computed(() => {
      console.log("Current Index:", currentIndex.value);
      console.log("Limited Cards:", limitedCards.value);
      console.log(
        "Current Card:",
        limitedCards.value.length
          ? limitedCards.value[currentIndex.value]
          : null
      );
      return limitedCards.value.length
        ? limitedCards.value[currentIndex.value]
        : null;
    });
    onMounted(() => {
      if (limitedCards.value.length > 0) {
        setInterval(() => {
          currentIndex.value =
            (currentIndex.value + 1) % limitedCards.value.length;
        }, 5000);
      }
    });
    return { currentIndex, limitedCards, currentCard };
  },
};
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease-in-out, transform 0.8s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
