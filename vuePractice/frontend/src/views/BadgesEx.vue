<template>
  <v-app>
    <v-card
      >v-badge: 알림 표시느낌 / dot 속성을 주면 점으로 나온다 / offset-x
      offset-y 속성으로 점의 위치 설정 가능</v-card
    >
    <v-container>
      <v-row align="center" justify="center">
        <v-badge bordered color="error" icon="mdi-lock" overlap>
          <v-btn class="white--text" color="error" depressed>
            Lock Account
          </v-btn>
        </v-badge>

        <div class="mx-3"></div>

        <v-badge
          bordered
          bottom
          color="deep-purple accent-4"
          dot
          offset-x="10"
          offset-y="10"
        >
          <v-avatar size="40">
            <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
          </v-avatar>
        </v-badge>

        <div class="mx-3"></div>

        <v-badge avatar bordered overlap>
          <template v-slot:badge>
            <v-avatar>
              <v-img src="https://cdn.vuetifyjs.com/images/logos/v.png"></v-img>
            </v-avatar>
          </template>

          <v-avatar size="40">
            <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
          </v-avatar>
        </v-badge>
      </v-row>
    </v-container>
    <v-card
      >이런식으로 커스터마이징도 가능 / @click을 이용해서 구현 가능</v-card
    >

    <v-container>
      <v-row justify="space-around">
        <div>
          <v-btn class="mx-1" color="primary" @click="messages++">
            Send Message
          </v-btn>

          <v-btn class="mx-1" color="error" @click="messages = 0">
            Clear Notifications
          </v-btn>
        </div>

        <v-badge :content="messages" :value="messages" color="green" overlap>
          <v-icon large> mdi-vuetify </v-icon>
        </v-badge>
      </v-row>
    </v-container>
    <v-card>hover 효과도 줄 수 있다</v-card>
    <v-container>
      <div class="text-center">
        <v-badge
          :value="hover"
          color="deep-purple accent-4"
          content="9999+"
          left
          transition="slide-x-transition"
        >
          <v-hover v-model="hover">
            <v-icon color="grey lighten-1" large> mdi-account </v-icon>
          </v-hover>
        </v-badge>
      </div>
    </v-container>
    <v-card>v-toolbar에서 알림이나 아이콘을 넣는 용도로도 사용 가능</v-card>
    <v-toolbar>
      <v-tabs dark background-color="primary" grow>
        <v-tab>
          <v-badge color="pink" dot> Item One </v-badge>
        </v-tab>

        <v-tab>
          <v-badge color="green" content="6"> Item Two </v-badge>
        </v-tab>

        <v-tab>
          <v-badge color="deep-purple accent-4" icon="mdi-vuetify">
            Item Three
          </v-badge>
        </v-tab>
      </v-tabs>
    </v-toolbar>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      messages: 0,
      hover: false,
    };
  },
};
</script>
