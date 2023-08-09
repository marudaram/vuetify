<template>
  <v-app>
    <div style="height: 100px"></div>
    <div class="font-weight-bold pb-5" style="margin: 0 auto">
      왼쪽에서부터 차례대로 hide-canvas / canvas-height 조절 / dot-size 조절
    </div>
    <v-row justify="space-around">
      <v-color-picker class="ma-2" hide-canvas></v-color-picker>
      <v-color-picker class="ma-2" canvas-height="300"></v-color-picker>
      <v-color-picker class="ma-2" dot-size="20"></v-color-picker>
    </v-row>

    <!-- 2 -->
    <div style="height: 100px"></div>
    <div class="font-weight-bold pb-5" style="margin: 0 auto">
      왼쪽에서부터 차례대로 hide-inputs / hide-mode-switch / v-select 추가하여
      모드 설정
    </div>
    <template>
      <v-row justify="space-around">
        <v-color-picker class="ma-2" hide-inputs></v-color-picker>
        <v-color-picker class="ma-2" hide-mode-switch></v-color-picker>
        <v-row class="ma-2" style="flex: 0 0 auto">
          <v-color-picker :mode.sync="mode"></v-color-picker>
          <v-select
            v-model="mode"
            :items="modes"
            style="max-width: 300px"
          ></v-select>
        </v-row>
      </v-row>
    </template>

    <!-- 3 -->
    <div style="height: 100px"></div>
    <div class="font-weight-bold pb-5" style="margin: 0 auto">
      v-btn을 활용해서 모드를 선택할 수 있음 / v-sheet을 활용하여 선택한 값의
      정도를 화면에 띄움
    </div>
    <template>
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-btn
              v-for="t in types"
              :key="t"
              class="my-4"
              block
              @click="type = t"
            >
              {{ t }}
            </v-btn>
          </v-col>
          <v-col class="d-flex justify-center">
            <v-color-picker v-model="color"></v-color-picker>
          </v-col>
          <v-col cols="12" md="4">
            <v-sheet dark class="pa-4">
              <pre>{{ showColor }}</pre>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    //초기값 설정
    mode: "hsla",
    modes: ["hsla", "rgba", "hexa"],
    types: ["hex", "hexa", "rgba", "hsla", "hsva"],
    type: "hex",
    hex: "#FF00FF",
    hexa: "#FF00FFFF",
    rgba: { r: 255, g: 0, b: 255, a: 1 },
    hsla: { h: 300, s: 1, l: 0.5, a: 1 },
    hsva: { h: 300, s: 1, v: 1, a: 1 },
  }),
  computed: {
    color: {
      get() {
        return this[this.type];
      },
      set(v) {
        this[this.type] = v;
      },
    },
    showColor() {
      if (typeof this.color === "string") return this.color; //typeof 연산자는 뒤의 표현식을 타입으로 돌려줌

      return JSON.stringify(
        Object.keys(this.color).reduce((color, key) => {
          //Object.keys() 메서드는 주어진 객체의 속성 이름들을 일반적인 반복문과 동일한 순서로 순회되는 열거할 수 있는 배열로 반환함 https://tocomo.tistory.com/26
          color[key] = Number(this.color[key].toFixed(2)); //Number은 문자열을 숫자로 변환하는 함수 toFixed는 소수점 자리수를 얼마나 나타낼건지 정하는 함수
          return color;
        }, {}),
        null,
        2
      );
    },
  },
};
</script>
