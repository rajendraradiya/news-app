<script setup>
import axios from "axios";
import { watch } from "vue";
import { inject } from "vue";
import { onMounted } from "vue";

const api = inject("api");
const newsList = ref([]);
const sectionList = ref([]);
const search = ref(null);
const currentPage = ref(1);
const total = ref(0);
const totalPage = ref(0);
import store from "@/store";
const globalStore = store();

import NewsCard from "@/components/NewsCard.vue";
import Total from "@/components/Total.vue";

const getNewsList = async () => {
  const res = await api.news.getNewsList({ q: search.value });
  newsList.value = res.results;
  total.value = res.total;
  totalPage.value = res.pages;
};

watch(currentPage, () => {
  this.getNewsList();
});

const onSearchButton = () => {
  globalStore.onSearch(search.value);
  getNewsList();
};

onMounted(() => {
  search.value = globalStore.search;
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
              v-model="search"
              variant="outlined"
            ></v-text-field>
            <v-btn color="primary" @click="onSearchButton">
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
      <v-col cols="12" class="pl-6" v-if="globalStore && globalStore.search">
        <h4 class="font-weight-light">
          Result for <b>{{ globalStore.search }}</b>
        </h4>
      </v-col>
      <v-col cols="12">
        <div
          style="height: 70vh"
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
          <h4 class="font-weight-light">
            There is no news data available at the moment
          </h4>
        </v-card>
      </v-col>
      <v-col cols="6" class="text-left pt-7 pl-5">
        <Total :total="total" />
      </v-col>
      <v-col cols="6">
        <v-pagination
          color="primary"
          v-model="currentPage"
          class="my-4"
          :length="totalPage"
        ></v-pagination>
      </v-col>
    </v-row>
  </v-container>
</template>
