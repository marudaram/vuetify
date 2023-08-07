<template>
  <v-app>
    <v-row>
      <v-col cols="12" sm="6">
        <v-hover v-slot="{ hover }" open-delay="200">
          <v-card
            :elevation="hover ? 16 : 2"
            :class="{ 'on-hover': hover }"
            class="mx-auto"
            height="350"
            max-width="350"
          >
            <v-card-text
              class="font-weight-medium mt-12 text-center text-subtitle-1"
            >
              Open Delay (Mouse enter) <br />마우스를 올렸을 때, 호버의 효과
              딜레이 정도를 정할 수 있음<br />
              ex) open-delay="200"
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>

      <v-col cols="12" sm="6">
        <v-hover v-slot="{ hover }" close-delay="200">
          <v-card
            :elevation="hover ? 16 : 2"
            :class="{ 'on-hover': hover }"
            class="mx-auto"
            height="350"
            max-width="350"
          >
            <v-card-text
              class="font-weight-medium mt-12 text-center text-subtitle-1"
            >
              Close Delay (Mouse leave)<br />마우스를 떼었을 때, 호버의 효과
              딜레이 정도를 정할 수 있음<br />
              ex) close-delay="200"
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
    <!-- 2 -->
    <template>
      <v-container class="pa-4 text-center">
        이미지나 다른 요소들을 이용하여 커스터마이징도 가능
        <v-row class="fill-height" align="center" justify="center">
          <template v-for="(item, i) in items">
            <v-col :key="i" cols="12" md="4">
              <v-hover v-slot="{ hover }">
                <v-card
                  :elevation="hover ? 12 : 2"
                  :class="{ 'on-hover': hover }"
                >
                  <v-img :src="item.img" height="225px">
                    <v-card-title class="text-h6 white--text">
                      <v-row
                        class="fill-height flex-column"
                        justify="space-between"
                      >
                        <p class="mt-4 subheading text-left">
                          {{ item.title }}
                        </p>

                        <div>
                          <p
                            class="ma-0 text-body-1 font-weight-bold font-italic text-left"
                          >
                            {{ item.text }}
                          </p>
                          <p
                            class="text-caption font-weight-medium font-italic text-left"
                          >
                            {{ item.subtext }}
                          </p>
                        </div>

                        <div class="align-self-center">
                          <v-btn
                            v-for="(icon, index) in icons"
                            :key="index"
                            :class="{ 'show-btns': hover }"
                            :color="transparent"
                            icon
                          >
                            <v-icon
                              :class="{ 'show-btns': hover }"
                              :color="transparent"
                            >
                              {{ icon }}
                            </v-icon>
                          </v-btn>
                        </div>
                      </v-row>
                    </v-card-title>
                  </v-img>
                </v-card>
              </v-hover>
            </v-col>
          </template>
        </v-row>
      </v-container>
    </template>
    <!-- 3 -->
    <template>
      v-expand-transition을 이용해서 다양한 효과를 줄 수 있음 / 커스터마이징
      가능
      <v-hover v-slot="{ hover }">
        <v-card class="mx-auto" color="grey lighten-4" max-width="600">
          <v-img
            :aspect-ratio="16 / 9"
            src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
          >
            <v-expand-transition>
              <div
                v-if="hover"
                class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal text-h2 white--text"
                style="height: 100%"
              >
                $14.99
              </div>
            </v-expand-transition>
          </v-img>
          <v-card-text class="pt-6" style="position: relative">
            <v-btn
              absolute
              color="orange"
              class="white--text"
              fab
              large
              right
              top
            >
              <v-icon>mdi-cart</v-icon>
            </v-btn>
            <div class="font-weight-light grey--text text-h6 mb-2">
              For the perfect meal
            </div>
            <h3 class="text-h4 font-weight-light orange--text mb-2">
              QW cooking utensils
            </h3>
            <div class="font-weight-light text-h6 mb-2">
              Our Vintage kitchen utensils delight any chef.<br />
              Made of bamboo by hand
            </div>
          </v-card-text>
        </v-card>
      </v-hover>
    </template>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-rewind", "mdi-play", "mdi-fast-forward"],
    items: [
      {
        title: "New Releases",
        text: `It's New Release Friday`,
        subtext: "Newly released songs.",
        img: "https://cdn.vuetifyjs.com/docs/images/cards/hands.jpg",
      },
      {
        title: "Rock",
        text: "Greatest Rock Hits",
        subtext: "Lose yourself in rock tunes.",
        img: "https://cdn.vuetifyjs.com/docs/images/cards/singer.jpg",
      },
      {
        title: "Mellow Moods",
        text: "Ambient Bass",
        subtext: "Chill beats to mellow you out.",
        img: "https://cdn.vuetifyjs.com/docs/images/cards/concert.jpg",
      },
    ],
    transparent: "rgba(255, 255, 255, 0)",
  }),
};
</script>

<style scoped>
.v-card {
  transition: opacity 0.4s ease-in-out;
}

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>
