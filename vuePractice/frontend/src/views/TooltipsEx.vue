<template>
  <v-app>
    tooltip을 사용할 때, 속성으로 left, right, top, bottom을 적어주면 해당
    위치에 알림창을 띄울 수 있음 <br />
    또한 툴팁 색도 지정 가능함
    <div class="text-center d-flex align-center justify-space-around">
      <v-tooltip left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on"> Left </v-btn>
        </template>
        <span>Left tooltip</span>
      </v-tooltip>

      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on"> Top </v-btn>
        </template>
        <span>Top tooltip</span>
      </v-tooltip>

      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on"> Bottom </v-btn>
        </template>
        <span>Bottom tooltip</span>
      </v-tooltip>

      <v-tooltip right>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on"> Right </v-btn>
        </template>
        <span>Right tooltip</span>
      </v-tooltip>
    </div>

    <!-- 2 -->
    <template>
      <div class="text-center d-flex align-center justify-space-around">
        <v-tooltip bottom color="primary">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark v-bind="attrs" v-on="on">
              primary
            </v-btn>
          </template>
          <span>Primary tooltip</span>
        </v-tooltip>

        <v-tooltip bottom color="success">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="success" dark v-bind="attrs" v-on="on">
              success
            </v-btn>
          </template>
          <span>Success tooltip</span>
        </v-tooltip>

        <v-tooltip bottom color="warning">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="warning" dark v-bind="attrs" v-on="on">
              warning
            </v-btn>
          </template>
          <span>Warning tooltip</span>
        </v-tooltip>

        <v-tooltip bottom color="error">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="error" dark v-bind="attrs" v-on="on"> error </v-btn>
          </template>
          <span>Error tooltip</span>
        </v-tooltip>
      </div>
    </template>

    <!-- 3 -->
    <template>
      <v-container fluid class="text-center">
        <v-row class="flex" justify="space-between">
          <v-col cols="12">
            <v-btn @click="show = !show"> toggle </v-btn>
          </v-col>

          <v-col cols="12" class="mt-12">
            <v-tooltip v-model="show" top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon color="grey lighten-1"> mdi-cart </v-icon>
                </v-btn>
              </template>
              <span>Programmatic tooltip</span>
            </v-tooltip>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
};
</script>
