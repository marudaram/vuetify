<template>
  <v-app>
    <v-card>block 설정을 주게되면 버튼이 한블럭을 차지한다</v-card>

    <v-btn block> Block Button </v-btn>
    <div style="height: 100px"></div>
    <v-card
      >depressed 속성은 배경색은 그대로 남겨놓지만 그림자는 지운다 / disabled의
      경우 버튼이 비활성화된다</v-card
    >

    <v-row align="center" justify="space-around" class="pt-6">
      <v-btn depressed> Normal </v-btn>
      <v-btn depressed color="primary"> Primary </v-btn>
      <v-btn depressed color="error"> Error </v-btn>
      <v-btn depressed disabled> Disabled </v-btn>
    </v-row>
    <div style="height: 100px"></div>
    <v-card
      >floating 속성의 버튼들은 동그랗고 보통 아이콘을 포함한다 / 그 외 다양한
      속성들을 넣어 커스터마이징할 수 있다</v-card
    >

    <div class="text-center">
      <v-btn class="mx-2" fab dark small color="primary">
        <v-icon dark> mdi-minus </v-icon>
      </v-btn>

      <v-btn class="mx-2" fab dark small color="pink">
        <v-icon dark> mdi-heart </v-icon>
      </v-btn>

      <v-btn class="mx-2" fab dark color="indigo">
        <v-icon dark> mdi-plus </v-icon>
      </v-btn>

      <v-btn class="mx-2" fab dark color="teal">
        <v-icon dark> mdi-format-list-bulleted-square </v-icon>
      </v-btn>

      <v-btn class="mx-2" fab dark large color="cyan">
        <v-icon dark> mdi-pencil </v-icon>
      </v-btn>

      <v-btn class="mx-2" fab dark large color="purple">
        <v-icon dark> mdi-android </v-icon>
      </v-btn>
    </div>
    <div style="height: 100px"></div>

    <v-card
      >icon 속성을 선언하고 v-icon 요소를 넣어 아이콘을 버튼처럼 활용할 수도
      있다 / 색상은 coior로 선언하여 바꿀 수 있으며 비활성화하고 싶은 경우
      disabled를 써준다</v-card
    >
    <v-card flat>
      <v-card-text>
        <v-container fluid class="pa-0">
          <v-row>
            <v-col cols="12">
              <p>Normal</p>
            </v-col>

            <v-col cols="12" sm="3">
              <v-btn icon color="pink">
                <v-icon>mdi-heart</v-icon>
              </v-btn>
            </v-col>

            <v-col cols="12" sm="3">
              <v-btn icon color="indigo">
                <v-icon>mdi-star</v-icon>
              </v-btn>
            </v-col>

            <v-col cols="12" sm="3">
              <v-btn icon color="green">
                <v-icon>mdi-cached</v-icon>
              </v-btn>
            </v-col>

            <v-col cols="12" sm="3">
              <v-btn icon color="deep-orange">
                <v-icon>mdi-thumb-up</v-icon>
              </v-btn>
            </v-col>
          </v-row>

          <v-row class="mt-12">
            <v-col cols="12">
              <p>Disabled</p>
            </v-col>

            <v-col cols="12" sm="3">
              <v-btn icon disabled>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
            </v-col>

            <v-col cols="12" sm="3">
              <v-btn icon disabled>
                <v-icon>mdi-star</v-icon>
              </v-btn>
            </v-col>

            <v-col cols="12" sm="3">
              <v-btn icon disabled>
                <v-icon>mdi-cached</v-icon>
              </v-btn>
            </v-col>

            <v-col cols="12" sm="3">
              <v-btn icon disabled>
                <v-icon>mdi-thumb-up</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
    <div style="height: 100px"></div>

    <v-card
      >loader & loading 속성을 이용해서 클릭 시 로딩 효과를 줄 수 있다 / 로딩할
      때는 비활성화되도록 disabled 설정을 같이 해줄 수 있다</v-card
    >
    <div class="text-center">
      <v-btn
        class="ma-2"
        :loading="loading"
        :disabled="loading"
        color="secondary"
        @click="loader = 'loading'"
      >
        Accept Terms
      </v-btn>

      <v-btn
        :loading="loading3"
        :disabled="loading3"
        color="blue-grey"
        class="ma-2 white--text"
        @click="loader = 'loading3'"
      >
        Upload
        <v-icon right dark> mdi-cloud-upload </v-icon>
      </v-btn>

      <v-btn
        class="ma-2"
        :loading="loading2"
        :disabled="loading2"
        color="success"
        @click="loader = 'loading2'"
      >
        Custom Loader
        <template v-slot:loader>
          <span>Loading...</span>
        </template>
      </v-btn>

      <v-btn
        class="ma-2"
        :loading="loading4"
        :disabled="loading4"
        color="info"
        @click="loader = 'loading4'"
      >
        Icon Loader
        <template v-slot:loader>
          <span class="custom-loader">
            <v-icon light>mdi-cached</v-icon>
          </span>
        </template>
      </v-btn>

      <v-btn
        :loading="loading5"
        :disabled="loading5"
        color="blue-grey"
        class="ma-2 white--text"
        fab
        @click="loader = 'loading5'"
      >
        <v-icon dark> mdi-cloud-upload </v-icon>
      </v-btn>
    </div>
    <v-card>버튼의 윤곽만 나타낼 수 있다</v-card>
    <div class="text-center">
      <v-btn class="ma-2" outlined color="indigo"> Outlined Button </v-btn>
      <v-btn class="ma-2" outlined fab color="teal">
        <v-icon>mdi-format-list-bulleted-square</v-icon>
      </v-btn>
      <v-btn class="ma-2" outlined large fab color="indigo">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </div>
    <v-card>plain버튼은 좀더 심플하다</v-card>
    <div class="text-center">
      <v-sheet
        class="px-7 pt-7 pb-4 mx-auto text-center d-inline-block"
        color="blue-grey darken-3"
        dark
      >
        <div class="grey--text text--lighten-1 text-body-2 mb-4">
          Are you sure you want to delete this album?
        </div>

        <v-btn :disabled="loading" class="ma-1" color="grey" plain>
          Cancel
        </v-btn>

        <v-btn
          :loading="loading"
          class="ma-1"
          color="error"
          plain
          @click="remove"
        >
          Delete
        </v-btn>
      </v-sheet>
    </div>
    <div style="height: 100px"></div>

    <v-card>text 속성을 주면 배경색도, 그림자도 없다</v-card>
    <v-row align="center" justify="space-around" class="pt-6">
      <v-btn text> Normal </v-btn>
      <v-btn text color="primary"> Primary </v-btn>
      <v-btn text color="error"> Error </v-btn>
      <v-btn text disabled> Disabled </v-btn>
    </v-row>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      loader: null,
      loading: false,
      loading2: false,
      loading3: false,
      loading4: false,
      loading5: false,
    };
  },
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => (this[l] = false), 3000);

      this.loader = null;
    },
  },
  methods: {
    async remove() {
      this.loading = true;

      await new Promise((resolve) => setTimeout(resolve, 3000));

      this.loading = false;
    },
  },
};
</script>

<style>
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
