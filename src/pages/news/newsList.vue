<script setup>
import axios from "axios";
import { watch } from "vue";
import { inject } from "vue";
import { onMounted } from "vue";

const api = inject("api");
const newsList = ref([]);
const sectionList = ref([]);
const currentPage = ref(1);
const total = ref(0);
const totalPage = ref(0);

import NewsCard from "@/components/NewsCard.vue";
import Total from "@/components/Total.vue";

const getNewsList = async () => {
  const res = await api.news.getNewsList();
  // newsList.value = res.results;
  total.value = res.total;
  totalPage.value = res.pages;

  // axios
  //   .get(
  //     "http://content.guardianapis.com/search?api-key=test&show-fields=thumbnail,headline"
  //   )
  //   .then((res) => {
  //   });
};

watch(currentPage, () => {
  this.getNewsList();
});

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
        <div
          style="height: 80vh"
          class="overflow-y-auto"
          v-if="newsList && newsList.length > 0"
        >
          <v-row no-gutters>
            <v-col
              cols="12"
              v-for="(news, index) in newsList"
              :key="index"
              class="pa-5"
            >
              <NewsCard :news="news" />
            </v-col>
          </v-row>
        </div>
        <v-card
          style="height: 80vh"
          v-else
          color="primary"
          variant="outlined"
          class="d-flex justify-center align-center"
        >
          <h4 class=" font-weight-light">
            There is no news data available at the moment
          </h4>
        </v-card>
      </v-col>
      <v-col cols="6" class="text-left pt-7 pl-5">
        <Total :total="total" />
      </v-col>
      <v-col cols="6">
        <v-pagination
          v-model="currentPage"
          class="my-4"
          :length="totalPage"
        ></v-pagination>
      </v-col>
    </v-row>
  </v-container>
</template>
