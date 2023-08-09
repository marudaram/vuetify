<template>
  <v-app>
    <v-bottom-navigation v-model="value">
      <v-btn value="recent">
        <span>Recent</span>

        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn value="favorites">
        <span>Favorites</span>

        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn value="nearby">
        <span>Nearby</span>

        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
    </v-bottom-navigation>
    <!-- 2 -->
    <div style="height: 100px"></div>
    <div class="font-weight-bold pb-5" style="margin: 0 auto">
      color 변경 가능
    </div>
    <v-bottom-navigation :value="value" color="primary">
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
    <!-- 3 -->
    <div style="height: 100px"></div>
    <div class="font-weight-bold pb-5" style="margin: 0 auto">
      grow를 사용하면 v-btn의 가능한 크기에(168px) 맞춰서 커짐
    </div>
    <v-card></v-card>
    <v-bottom-navigation :value="value" color="teal" grow>
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
    <!-- 4 -->
    <div style="height: 100px"></div>
    <div class="font-weight-bold pb-5" style="margin: 0 auto">
      horizontal 사용시 아이콘과 글씨가 나란히 옆에 생성됨 / threshold: 문지방 -
      바닥에 푸터가 붙어있는 형식
    </div>
    <v-card class="overflow-hidden mx-auto" height="200" max-width="500">
      <v-bottom-navigation
        absolute
        hide-on-scroll
        horizontal
        scroll-target="#hide-on-scroll-example"
      >
        <v-btn color="deep-purple accent-4" text>
          <span>Recents</span>

          <v-icon>mdi-history</v-icon>
        </v-btn>

        <v-btn color="deep-purple accent-4" text>
          <span>Favorites</span>

          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn color="deep-purple accent-4" text>
          <span>Nearby</span>

          <v-icon>mdi-map-marker</v-icon>
        </v-btn>
      </v-bottom-navigation>

      <v-responsive
        id="hide-on-scroll-example"
        class="overflow-y-auto"
        max-height="600"
      >
        <v-responsive height="1500"></v-responsive>
      </v-responsive>
    </v-card>

    <v-bottom-navigation :value="value" color="primary" horizontal>
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
  </v-app>
</template>

<script>
export default {
  data: () => ({ value: 1 }),
};
</script>
