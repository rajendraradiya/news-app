import { defineStore } from "pinia";

const globalStore = defineStore("globalStore", {
  state: () => ({
    search: null,
  }),
  actions: {
    onSearch(val) {
      this.search = val;
    },
  },
});

export default globalStore;
