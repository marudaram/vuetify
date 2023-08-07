<template>
  <v-app>
    <v-row align="center" justify="center">
      <v-card height="300" width="250">
        <v-row justify="center">
          <v-btn color="success" class="mt-12" @click="overlay = !overlay">
            Show Overlay
          </v-btn>

          <v-overlay :absolute="absolute" :value="overlay">
            <v-btn color="success" @click="overlay = false">
              Hide Overlay
            </v-btn>
          </v-overlay>
        </v-row>
      </v-card>
    </v-row>

    <!-- 2 -->
    <template>
      <v-row align="center" justify="center">
        <v-card height="300" width="250">
          <v-row justify="center">
            <v-btn
              color="orange lighten-2"
              class="mt-12"
              @click="overlay = !overlay"
            >
              Show Overlay
            </v-btn>

            <v-overlay :absolute="absolute" :opacity="opacity" :value="overlay">
              <v-btn color="orange lighten-2" @click="overlay = false">
                Hide Overlay
              </v-btn>
            </v-overlay>
          </v-row>
        </v-card>
      </v-row>
    </template>

    <!-- 3 -->
    <template>
      <v-row justify="center">
        <v-btn class="white--text" color="teal" @click="overlay = !overlay">
          Show Overlay
        </v-btn>

        <v-overlay :z-index="zIndex" :value="overlay">
          <v-btn class="white--text" color="teal" @click="overlay = false">
            Hide Overlay
          </v-btn>
        </v-overlay>
      </v-row>
    </template>

    <!-- 4 -->
    <template>
      <v-hover>
        <template v-slot:default="{ hover }">
          <v-card class="mx-auto" max-width="344">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/forest-art.jpg"
            ></v-img>

            <v-card-text>
              <h2 class="text-h6 primary--text">Magento Forests</h2>
              Travel to the best outdoor experience on planet Earth. A vacation
              you will never forget!
            </v-card-text>

            <v-card-title>
              <v-rating
                :value="4"
                dense
                color="orange"
                background-color="orange"
                hover
                class="mr-2"
              ></v-rating>
              <span class="primary--text text-subtitle-2">64 Reviews</span>
            </v-card-title>

            <v-fade-transition>
              <v-overlay v-if="hover" absolute color="#036358">
                <v-btn>See more info</v-btn>
              </v-overlay>
            </v-fade-transition>
          </v-card>
        </template>
      </v-hover>
    </template>

    <!-- 5 -->
    <template>
      <div class="text-center">
        <v-btn
          color="deep-purple accent-4"
          class="white--text"
          @click="overlay = !overlay"
        >
          Launch Application
          <v-icon right> mdi-open-in-new </v-icon>
        </v-btn>

        <v-overlay :value="overlay">
          <v-progress-circular indeterminate size="64"></v-progress-circular>
        </v-overlay>
      </div>
    </template>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    absolute: true,
    overlay: false,
    opacity: 1, // opacity가 커질수록 어두워짐
    zIndex: 0,
  }),
  watch: {
    overlay(val) {
      val && // &&연산자가 들어가게 되면 앞 조건이 true인 경우에만 오른쪽으로 나아감
        setTimeout(() => {
          this.overlay = false;
        }, 3000);
    },
  },
};
</script>
