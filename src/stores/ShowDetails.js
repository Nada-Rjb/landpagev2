import { defineStore } from "pinia";
import axios from "axios";
import { apiKey, apiSecret } from "@/config";

export const productstore = defineStore("ShowDetails", {
  state: () => ({
    ShowDetailsArray: [],
    CollectionsArray: [],
    WebsiteItemsArray: [],
    WebsiteServiceArray: [],
    SingleProduct: {},
  }),
  actions: {
    async getDetailes() {
      // Ensure this matches `mapActions`
      try {
        const response = await axios.get(
          `https://erp.elfateh.online/api/method/general_customization.general_customiztion.api.get_website_data`,
          {
            headers: {
              Authorization: `token ${apiKey}:${apiSecret}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (response.data) {
          this.ShowDetailsArray = response.data.message.features_data || [];
          this.CollectionsArray = response.data.message.collections_data || [];
          this.WebsiteItemsArray = (
            response.data.message.website_item_for_salle || []
          ).filter((item) => item.service !== 1);
          this.WebsiteServiceArray = (
            response.data.message.website_item_for_salle || []
          ).filter((item) => item.service === 1);
        }
      } catch (error) {
        console.error("Error fetching details:", error);
      }
    },
    async getsingleProduct(web_item_name) {
      console.log("web_item_name", web_item_name);
      try {
        const response = await axios.get(
          "https://erp.elfateh.online/api/method/general_customization.general_customiztion.api.get_website_data",
          {
            headers: {
              Authorization: `token ${apiKey}:${apiSecret}`,
              "Content-Type": "application/json",
            },
          }
        );

        // Extract product list safely
        const productList = response.data.message.website_item_for_salle;

        // Find the matching product
        const product = productList.find(
          (item) => item.web_item_name === web_item_name
        );

        if (product) {
          this.SingleProduct = product;
        } else {
          console.warn("Product not found:", web_item_name);
          this.SingleProduct = null;
        }
      } catch (error) {
        console.error("Error fetching product:", error);
        this.SingleProduct = null;
      }
    },
  },
});
