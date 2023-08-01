<template>
  <v-app>
    <v-banner>v-banner</v-banner>
    <v-banner single-line>single-line</v-banner>
    <v-banner sticky>sticky</v-banner>
    <v-banner outlined>outlined</v-banner>
    <v-banner rounded color="green">rounded - 잘보이도록 색 넣음</v-banner>
    <v-banner shaped color="blue">shaped - 잘보이도록 색 넣음</v-banner>
    <v-banner tile color="orange">tile - radius 없음</v-banner>
    <v-banner dark color="orange"
      >dark - 글자색을 흰색으로 바꾼 후 테마와 글자의 명도를 자동으로 조정하여
      가독성을 높인다. / accent, primary, secondary 등 색 조정 가능</v-banner
    >
    <v-banner single-line @click:icon="alert">
      <v-icon slot="icon" color="warning" size="36">
        mdi-wifi-strength-alert-outline
      </v-icon>
      @click:icon 으로 아이콘만 클릭하고 이벤트 발생하게끔 설정 가능

      <template v-slot:actions>
        <v-btn color="primary" text> Connection Settings </v-btn>
      </template>
    </v-banner>
    <div>
      <v-checkbox v-model="v0" label="Visible"></v-checkbox>
      <v-banner v-model="v0" single-line transition="slide-y-transition">
        v-slot:actions="{ dismiss }" 으로 v-slot 자체에서 기능을 제공함 - 따로
        메서드 선언할 필요 없음
        <template v-slot:actions="{ dismiss }">
          <v-btn text color="primary" @click="dismiss"> Dismiss </v-btn>
          <v-btn text color="primary"> Retry </v-btn>
        </template>
      </v-banner>
    </div>
    <v-banner two-line>
      <v-avatar slot="icon" color="deep-purple accent-4" size="40">
        <v-icon icon="mdi-lock" color="white"> mdi-lock </v-icon>
      </v-avatar>

      v-slot:actions을 이용하여 이벤트를 선언, 하위 요소에서 사용할 수 있다

      <template v-slot:actions>
        <v-btn text color="deep-purple accent-4"> Action </v-btn>
        <v-btn text color="deep-purple accent-4"> Action </v-btn>
      </template>
    </v-banner>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    v0: true,
  }),
  methods: {
    alert() {
      alert("Hello, World!");
    },
  },
};
</script>
