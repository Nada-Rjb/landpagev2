import { defineStore } from "pinia";
import axios from "axios";
import { apiKey, apiSecret } from "@/config";

//Creates a Pinia store named "ShowDetails" and exports it for use in Vue components.
export const useStore = defineStore("ShowDetails", {
  state: () => ({
    ShowDetailsArray: [],
  }),
  actions: {
    async getDetailes() {
      try {
        const response = await axios.get(
          "https://erp.elfateh.online/api/method/general_customization.general_customiztion.api.get_features",
          {
            headers: {
              Authorization: `token ${apiKey}:${apiSecret}`, // ✅ Add Authorization Header
              //This tells the server that the request sends/receives JSON data.
              "Content-Type": "application/json",
            },
          }
        );

        console.log(response.data);
        this.ShowDetailsArray = response.data.message;
      } catch (error) {
        console.error("Error fetching details:");
      }
    },
  },
});
