<template>
  <v-app>
    <v-container class="fill-height" fluid style="min-height: 434px">
      <v-fade-transition mode="out-in">
        <v-row>
          <v-col cols="6">
            <v-card>
              <v-img
                src="https://picsum.photos/350/165?random"
                height="125"
                class="grey darken-4"
              ></v-img>
              <v-card-title class="text-h6"> height </v-card-title>
            </v-card>
          </v-col>

          <v-col cols="6">
            <v-card>
              <v-img
                src="https://picsum.photos/350/165?random"
                height="125"
                contain
                class="grey darken-4"
              ></v-img>
              <v-card-title class="text-h6"> height with contain </v-card-title>
            </v-card>
          </v-col>

          <v-col cols="6">
            <v-card>
              <v-img
                src="https://picsum.photos/350/165?random"
                max-height="125"
                class="grey darken-4"
              ></v-img>
              <v-card-title class="text-h6"> max-height </v-card-title>
            </v-card>
          </v-col>

          <v-col cols="6">
            <v-card>
              <v-img
                src="https://picsum.photos/350/165?random"
                max-height="125"
                contain
                class="grey darken-4"
              ></v-img>
              <v-card-title class="text-h6">
                max-height with contain
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-fade-transition>
    </v-container>
    <!-- 2 -->
    <template>
      <v-row>
        <v-col v-for="n in 9" :key="n" class="d-flex child-flex" cols="4">
          <v-img
            :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
            :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
            aspect-ratio="1"
            class="grey lighten-2"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-col>
      </v-row>
    </template>
  </v-app>
</template>
