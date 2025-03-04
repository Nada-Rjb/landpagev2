import { defineStore } from "pinia";
import axios from "axios";
import { apiKey, apiSecret } from "@/config";

export const useStore = defineStore("ShowDetails", {
  state: () => ({
    ShowDetailsArray: [], // Holds feature data
    CollectionsArray: [], // Holds collection data
  }),
  actions: {
    async fetchData(apiEndpoint, stateKey) {
      try {
        const response = await axios.get(
          `https://erp.elfateh.online/api/method/general_customization.general_customiztion.api.${apiEndpoint}`,
          {
            headers: {
              Authorization: `token ${apiKey}:${apiSecret}`,
              "Content-Type": "application/json",
            },
          }
        );
        console.log(`Fetched ${apiEndpoint}:`, response.data);
        this[stateKey] = response.data.message; // Dynamically update state for each array
      } catch (error) {
        console.error(`Error fetching ${apiEndpoint}:`, error);
      }
    },

    async getDetailes() {
      await this.fetchData("get_features", "ShowDetailsArray");
      await this.fetchData("get_collections", "CollectionsArray");
    },
  },
});
