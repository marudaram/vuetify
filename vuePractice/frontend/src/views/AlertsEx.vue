<template>
  <v-app>
    <v-alert
      border="left"
      dense
      elevation="1"
      outlined
      prominent
      text
      type="success"
    >
      border="left" 추가</v-alert
    >
    <v-alert
      border="right"
      dense
      elevation="1"
      outlined
      prominent
      text
      type="success"
    >
      border="right" 추가
    </v-alert>
    <v-alert
      border="top"
      dense
      elevation="1"
      outlined
      prominent
      text
      type="success"
    >
      border="top" 추가</v-alert
    >
    <v-alert
      border="bottom"
      dense
      elevation="1"
      outlined
      prominent
      text
      type="success"
    >
      border="bottom" 추가</v-alert
    >

    <v-alert border="top" color="red lighten-2" dark>
      a top border and red color
    </v-alert>
    <v-alert border="right" color="blue-grey" dark>
      a right border and blue-grey color
    </v-alert>
    <v-alert border="bottom" color="pink darken-1" dark>
      a bottom border and pink color
    </v-alert>
    <v-alert border="left" color="indigo" dark>
      with a border left type info
    </v-alert>

    <v-alert
      border="left"
      colored-border
      color="deep-purple accent-4"
      elevation="2"
    >
      colored-border / color="deep-purple accent-4"
    </v-alert>
    <v-alert border="top" colored-border type="info" elevation="2">
      colored-border / type="info"
    </v-alert>
    <v-alert border="bottom" colored-border type="warning" elevation="2">
      colored-border / type="warning"
    </v-alert>
    <v-alert border="right" colored-border type="error" elevation="2">
      colored-border / type="error"
    </v-alert>

    <v-alert
      v-model="alert"
      border="left"
      close-text="Close Alert"
      color="deep-purple accent-4"
      dark
      dismissible
    >
      dark 어트리뷰트를 지정하면 글자색을 흰색으로 바꾼 후 테마와 글자의 명도를
      자동으로 조정하여 가독성을 높인다. color="deep-purple accent-4" / dark /
      close-text="Close Alert" / dismissible
    </v-alert>

    <v-alert color="#2A3B4D" dark icon="mdi-firework" dense
      >icon="mdi-firework"
    </v-alert>
    <v-alert color="#C51162" dark icon="mdi-material-design" border="right">
      icon="mdi-material-design"
    </v-alert>
    <v-alert color="primary" dark icon="mdi-vuetify" border="left" prominent>
      icon="mdi-vuetify"
    </v-alert>

    <v-alert type="success">v-alert 기본 타입</v-alert>
    <v-alert dense type="success"
      >v-alert dense 추가 - 좀 더 좁아짐 dense:밀집한</v-alert
    >
    <v-alert dense prominent type="success"
      >v-alert prominent 추가 - 두꺼워짐 prominent: 눈에 띄는</v-alert
    >
    <v-alert dense outlined prominent type="success"
      >v-alert outlined 추가 - 윤곽만 나옴 outlined: 윤곽의</v-alert
    >
    <v-alert dense outlined prominent text type="success"
      >v-alert text 추가
    </v-alert>
    <v-alert dense elevation="1" outlined prominent text type="success"
      >elevation 1 - 위로 뜨는 정도, 숫자가 커질수록 높이 떠보이는 그림자
      효과</v-alert
    >
    <v-alert dense elevation="24" outlined prominent text type="success"
      >elevation 24 - 위로 뜨는 정도, 숫자가 커질수록 높이 떠보이는 그림자
      효과</v-alert
    >

    <v-alert shaped dark color="info"> shaped 요소 추가 </v-alert>
    <v-alert shaped tile dark color="info">
      tile 추가 - border-radius 적용이 해제된다
    </v-alert>
    <v-alert shaped outlined type="success">
      I'm a shaped alert with a outline option
    </v-alert>
    <v-alert shaped dense dark type="warning">
      I'm a shaped alert with a dense option option
    </v-alert>
    <v-alert shaped prominent type="error">
      I'm a shaped alert with a dense prominent option that Praesent blandit
      laoreet nibh. Praesent nonummy mi in odio. Phasellus tempus. Mauris turpis
      nunc, blandit et, volutpat molestie, porta ut, ligula. Duis leo.
    </v-alert>
    <div>
      <div class="text-center mb-4">
        <v-btn color="primary" @click="alert = !alert"> Toggle </v-btn>
      </div>
      <v-alert
        :value="alert"
        color="pink"
        dark
        border="top"
        icon="mdi-home"
        transition="scale-transition"
      >
        토글을 이용해서 사용할 수도 있다.
      </v-alert>
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      alert: true,
    };
  },
};
</script>
