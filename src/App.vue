<script setup></script>

<template>
  <v-card class="mx-auto" color="grey-lighten-3" style="height: 100vh">
    <v-layout>
      <v-app-bar
        color="teal-darken-4"
        image="https://picsum.photos/1920/1080?random"
      >
        <template v-slot:image>
          <v-img
            gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
          ></v-img>
        </template>

        <template v-slot:prepend>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>N E W S . O R G</v-app-bar-title>

        <v-spacer></v-spacer>

        <v-btn>
          <router-link to="/" style="text-decoration: none;" class="text-white">Home</router-link>
        </v-btn>
        <v-btn>
          <router-link to="/news" style="text-decoration: none;" class="text-white">News</router-link>
        </v-btn>

      </v-app-bar>

      <v-main>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-main>
    </v-layout>
  </v-card>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
