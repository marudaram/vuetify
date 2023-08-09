<template>
  <v-app>
    <div class="font-weight-bold pb-5" style="margin: 0 auto">
      shift를 사용하면 active되지 않을 때 button에 걸리는 텍스트를 숨겨버린다
    </div>
    <v-bottom-navigation v-model="value" :background-color="color" dark shift>
      <v-btn>
        <span>Video</span>

        <v-icon>mdi-television-play</v-icon>
      </v-btn>

      <v-btn>
        <span>Music</span>

        <v-icon>mdi-music-note</v-icon>
      </v-btn>

      <v-btn>
        <span>Book</span>

        <v-icon>mdi-book</v-icon>
      </v-btn>

      <v-btn>
        <span>Image</span>

        <v-icon>mdi-image</v-icon>
      </v-btn>
    </v-bottom-navigation>
    <!-- 2 -->
    <div style="height: 100px"></div>
    <div class="font-weight-bold pb-5" style="margin: 0 auto">
      v-bottom-navigation부분에 :input-value="active"로 주고(data에는
      active=true로 선언한다), 클릭시 @click="active = !active"로 주게 되면
      토글처럼 활용할 수 있다
    </div>

    <div class="overflow-hidden">
      <div class="text-center mb-8">
        <v-btn color="deep-purple" outlined @click="active = !active">
          Toggle Navigation
        </v-btn>
      </div>

      <v-bottom-navigation v-model="value" :input-value="active" color="indigo">
        <v-btn>
          <span>Recents</span>

          <v-icon>mdi-history</v-icon>
        </v-btn>

        <v-btn>
          <span>Favorites</span>

          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn>
          <span>Nearby</span>

          <v-icon>mdi-map-marker</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </div>
  </v-app>
</template>

<script>
export default {
  data: () => ({ value: 1, active: true }),

  computed: {
    color() {
      switch (this.value) {
        case 0:
          return "blue-grey";
        case 1:
          return "teal";
        case 2:
          return "brown";
        case 3:
          return "indigo";
        default:
          return "blue-grey";
      }
    },
  },
};
</script>
