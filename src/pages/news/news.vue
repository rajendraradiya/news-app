<script setup>
import store from "@/store";
const globalStore = store();


const items = ref([
  {
    prependIcon: "mdi-clock-outline",
    title: "recipe with chicken",
  },
  {
    prependIcon: "mdi-clock-outline",
    title: "best hiking trails near me",
  },
  {
    prependIcon: "mdi-clock-outline",
    title: "how to learn a new language",
  },
  {
    prependIcon: "mdi-clock-outline",
    title: "DIY home organization ideas",
  },
  {
    prependIcon: "mdi-clock-outline",
    title: "latest fashion trends",
  },
]);

const getSearchList = (e) => {
  globalStore.onSearch(e.target.value);
};
</script>

<template>
  <div class="d-flex justify-center align-center" style="height: 50vh">
    <v-responsive max-width="550">
      <!-- <v-img
        class="mx-auto mt-12 mb-16"
        max-height="140"
        max-width="240"
        src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-dark-text.svg"
      ></v-img> -->
      <h1 class="text-uppercase text-primary text-center py-16">Latest news</h1>

      <v-autocomplete
        :items="items"
        append-inner-icon="mdi-microphone"
        auto-select-first
        class="flex-full-width"
        density="comfortable"
        item-props
        menu-icon=""
        placeholder="Search Google or type a URL"
        prepend-inner-icon="mdi-magnify"
        rounded
        theme="light"
        @input="getSearchList"
        variant="solo"
      ></v-autocomplete>

      <!-- <v-container class="text-center">
        <v-row justify="center" dense>
          <v-col v-for="(shortcut, i) in shortcuts" :key="i" cols="auto">
            <v-card
              :href="shortcut.href"
              class="pa-4"
              flat
              rel="noopener noreferer"
              target="_blank"
              width="112"
            >
              <v-avatar
                :icon="shortcut.icon"
                color="white"
                variant="tonal"
                class="mb-2"
              ></v-avatar>

              <div
                class="text-caption text-truncate"
                v-text="shortcut.title"
              ></div>
            </v-card>
          </v-col>
        </v-row>
      </v-container> -->
    </v-responsive>
  </div>
</template>
