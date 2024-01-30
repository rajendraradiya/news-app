<script setup>
import axios from "axios";
import { onMounted } from "vue";

const newsList = ref([]);
const sectionList = ref([]);

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

const getNewsList = async () => {
  axios
    .get(
      "http://content.guardianapis.com/search?api-key=test&show-fields=thumbnail,headline"
    )
    .then((res) => {
      newsList.value = res.data.response.results;
    });
};

onMounted(() => {
  getNewsList();
});
</script>

<template>
  <v-container>
    <v-row dense>
      <V-col cols="12">
        <V-row>
          <v-col cols="8"></v-col>
          <v-col cols="4" class="d-flex">
            <v-text-field
              label="Search"
              density="compact"
              variant="outlined"
            ></v-text-field>
            <v-btn color="primary">
              <v-icon size="large" color="white">mdi-magnify</v-icon>
            </v-btn>
          </v-col>
        </V-row>
      </V-col>
      <!-- <v-col cols="12" class="text-left">
        <span v-for="(section, index) in sectionList" :key="index">
          <v-chip
            size="small"
            variant="outlined"
            class="mr-2 mb-2"
            color="error"
            closable
          >
            {{ section }}
          </v-chip>
        </span>
      </v-col> -->
      <v-col cols="12">
        <div style="height: 80vh" class="overflow-y-auto">
          <v-row no-gutters>
            <v-col
              cols="12"
              v-for="(news, index) in newsList"
              :key="index"
              class="pa-5"
            >
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
                      <v-chip
                        variant="outlined"
                        :color="colorList[news.sectionName]"
                      >
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
                            {{
                              new Date(news.webPublicationDate).toLocaleString()
                            }}
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
            </v-col>
          </v-row>
        </div>
      </v-col>
      <v-col cols="6" class="text-left pt-7 pl-5">
        <v-chip
          color="primary lighten-7 pa-4 text-subtitle-1"
          label
          size="x-large"
          text-color="secondary"
        >
          <h3>Total : <b class="notranslate"> 0 </b></h3>
        </v-chip>
      </v-col>
    </v-row>
  </v-container>
</template>
