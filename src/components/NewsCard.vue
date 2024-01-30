<script setup>
const { news } = defineProps({
  news: {
    required: true,
  },
});
const colorList = {
  "World news": "primary",
  "US news": "orange",
  Education: "pink",
  Politics: "error",
  "UK news": "warning",
  Opinion: "yellow",
  Opinion: "blue",
  Football: "green",
  "US news": "black",
  "World news": "red",
};
</script>

<template>
  <v-card color="indigo" elevation="0" variant="outlined">
    <v-row>
      <v-col cols="4">
        <a :href="news.webUrl" target="_blank">
          <v-img
            :src="news.fields.thumbnail"
            contain
            style="height: 100%"
          ></v-img>
        </a>
      </v-col>
      <v-col cols="8" class="pt-14">
        <v-card-title
          class="text-h5 d-flex text-wrap text-left font-weight-bold pl-0"
        >
          {{ news.fields.headline }}
        </v-card-title>

        <div class="d-flex py-2">
          <v-chip variant="outlined" :color="colorList[news.sectionName]">
            {{ news.sectionName }}
          </v-chip>
        </div>

        <v-card-actions class="">
          <v-row no-gutters>
            <v-col cols="6" class="d-flex justify-start align-end">
              <h5
                class="text-caption text-left"
                v-if="news && news.webPublicationDate"
              >
                {{ new Date(news.webPublicationDate).toLocaleString() }}
              </h5>
            </v-col>
            <v-col cols="6" class="text-right">
              <a :href="news.webUrl" target="_blank">
                <v-btn class="ms-2" variant="outlined" size="small">
                  Read More
                </v-btn>
              </a>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-card>
</template>
