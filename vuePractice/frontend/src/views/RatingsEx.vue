<template>
  <v-app>
    <div class="text-center">
      <v-rating
        v-model="rating"
        background-color="purple lighten-3"
        color="purple"
        large
      ></v-rating>
      <v-rating
        v-model="rating"
        background-color="pink lighten-3"
        color="pink"
        large
      ></v-rating>
      <v-rating
        v-model="rating"
        background-color="orange lighten-3"
        color="orange"
        large
      ></v-rating>
      <v-rating
        v-model="rating"
        background-color="green lighten-3"
        color="green"
        large
      ></v-rating>
      <v-rating
        v-model="rating"
        background-color="red lighten-3"
        color="red"
        large
      ></v-rating>
      <v-rating
        v-model="rating"
        background-color="indigo lighten-3"
        color="indigo"
        large
      ></v-rating>
    </div>

    <!-- 2 -->
    <template>
      <v-card class="elevation-16 mx-auto" width="300">
        <v-card-title class="text-h5"> Rate Our Framework </v-card-title>
        <v-card-text>
          If you enjoy using Vuetify, please take a few seconds to rate your
          experience with the framework. It really helps!

          <div class="text-center mt-12">
            <v-rating
              v-model="rating"
              color="yellow darken-3"
              background-color="grey darken-1"
              empty-icon="$ratingFull"
              half-increments
              hover
              large
            ></v-rating>
          </div>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions class="justify-space-between">
          <v-btn text> No Thanks </v-btn>
          <v-btn color="primary" text> Rate Now </v-btn>
        </v-card-actions>
      </v-card>
    </template>

    <!-- 3 -->
    <template>
      <div class="text-center">
        <v-rating v-model="rating">
          <template v-slot:item="props">
            <v-icon
              :color="props.isFilled ? genColor(props.index) : 'grey lighten-1'"
              large
              @click="props.click"
            >
              {{
                props.isFilled ? "mdi-star-circle" : "mdi-star-circle-outline"
              }}
            </v-icon>
          </template>
        </v-rating>
      </div>
    </template>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    rating: 4,
    colors: ["green", "purple", "orange", "indigo", "red"],
  }),
  methods: {
    genColor(i) {
      return this.colors[i];
    },
  },
};
</script>
