<template>
  <div>
    <upper-panner></upper-panner>
    <the-features :ShowDetailsArray="ShowDetailsArray"></the-features>
    <dairy-intro></dairy-intro>
    <about-cheese :ShowDetailsArray="ShowDetailsArray"></about-cheese>
    <CategoriesSection :CollectionsArray="CollectionsArray"></CategoriesSection>
    <ProductCom :WebsiteItemsArray="WebsiteItemsArray"></ProductCom>
    <ServiceSection :WebsiteServiceArray="WebsiteServiceArray"></ServiceSection>
    <QualityFeatures></QualityFeatures>
  </div>
</template>

<script>
import UpperPanner from "@/components/HomePage/UpperPanner.vue";
import TheFeatures from "@/components/HomePage/TheFeatures.vue";
import DairyIntro from "@/components/HomePage/DairyIntro.vue";
import AboutCheese from "@/components/HomePage/AboutCheese.vue";
import CategoriesSection from "@/components/HomePage/CategoriesSection.vue";
import ProductCom from "@/components/HomePage/ProductCom.vue";
import ServiceSection from "@/components/HomePage/ServiceSection.vue";
import { mapActions, mapState } from "pinia";
import { productstore } from "@/stores/ShowDetails";
import QualityFeatures from "@/components/HomePage/QualityFeatures.vue";

// @ is an alias to /src
export default {
  name: "HomeView",
  components: {
    UpperPanner,
    TheFeatures,
    DairyIntro,
    AboutCheese,
    CategoriesSection,
    ProductCom,
    ServiceSection,
    QualityFeatures,
  },
  computed: {
    ...mapState(productstore, [
      "ShowDetailsArray",
      "CollectionsArray",
      "WebsiteItemsArray",
      "WebsiteServiceArray",
    ]),
  },
  methods: {
    ...mapActions(productstore, ["getDetailes"]),
  },
  async mounted() {
    await this.getDetailes();
  },
};
</script>
