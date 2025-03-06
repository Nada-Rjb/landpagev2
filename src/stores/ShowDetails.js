import { defineStore } from "pinia";
import axios from "axios";
import { apiKey, apiSecret } from "@/config";

export const useStore = defineStore("ShowDetails", {
  state: () => ({
    ShowDetailsArray: [],
    CollectionsArray: [],
    WebsiteItemsArray: [],
    WebsiteServiceArray: [],
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

          console.log("ShowDetailsArray:", this.ShowDetailsArray);
          console.log("CollectionsArray:", this.CollectionsArray);
          console.log("WebsiteItemsArray:", this.WebsiteItemsArray);
        }
      } catch (error) {
        console.error("Error fetching details:", error);
      }
    },
  },
});
