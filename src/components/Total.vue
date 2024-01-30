<script setup>
const { total } = defineProps({
  total: {
    required: true,
  },
});
</script>
<template>
  <v-chip
    color="primary lighten-7 pa-4 text-subtitle-1"
    label
    size="x-large"
    text-color="secondary"
  >
    <h3>
      Total : <b class="notranslate"> {{ total }} </b>
    </h3>
  </v-chip>
</template>
