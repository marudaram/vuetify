<template>
  <v-app>
    <v-card flat>
      <v-card-text>
        <v-container fluid>
          <v-row>
            <v-col cols="12" sm="4" md="4">
              <v-checkbox
                v-model="ex4"
                label="red"
                color="red"
                value="red"
                hide-details
              ></v-checkbox>
              <v-checkbox
                v-model="ex4"
                label="red darken-3"
                color="red darken-3"
                value="red darken-3"
                hide-details
              ></v-checkbox>
            </v-col>
            <v-col cols="12" sm="4" md="4">
              <v-checkbox
                v-model="ex4"
                label="indigo"
                color="indigo"
                value="indigo"
                hide-details
              ></v-checkbox>
              <v-checkbox
                v-model="ex4"
                label="indigo darken-3"
                color="indigo darken-3"
                value="indigo darken-3"
                hide-details
              ></v-checkbox>
            </v-col>
            <v-col cols="12" sm="4" md="4">
              <v-checkbox
                v-model="ex4"
                label="orange"
                color="orange"
                value="orange"
                hide-details
              ></v-checkbox>
              <v-checkbox
                v-model="ex4"
                label="orange darken-3"
                color="orange darken-3"
                value="orange darken-3"
                hide-details
              ></v-checkbox>
            </v-col>
          </v-row>

          <v-row class="mt-12">
            <v-col cols="12" sm="4" md="4">
              <v-checkbox
                v-model="ex4"
                label="primary"
                color="primary"
                value="primary"
                hide-details
              ></v-checkbox>
              <v-checkbox
                v-model="ex4"
                label="secondary"
                color="secondary"
                value="secondary"
                hide-details
              ></v-checkbox>
            </v-col>
            <v-col cols="12" sm="4" md="4">
              <v-checkbox
                v-model="ex4"
                label="success"
                color="success"
                value="success"
                hide-details
              ></v-checkbox>
              <v-checkbox
                v-model="ex4"
                label="info"
                color="info"
                value="info"
                hide-details
              ></v-checkbox>
            </v-col>
            <v-col cols="12" sm="4" md="4">
              <v-checkbox
                v-model="ex4"
                label="warning"
                color="warning"
                value="warning"
                hide-details
              ></v-checkbox>
              <v-checkbox
                v-model="ex4"
                label="error"
                color="error"
                value="error"
                hide-details
              ></v-checkbox>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
    <!-- 2 -->
    <div style="height: 100px"></div>
    <div class="font-weight-bold pb-5" style="margin: 0 auto">
      label과 value를 이용해서 선택한 값을 볼 수 있음
    </div>
    <template>
      <v-container fluid>
        <p>{{ selected }}</p>
        <v-checkbox v-model="selected" label="John" value="John"></v-checkbox>
        <v-checkbox v-model="selected" label="Jacob" value="Jacob"></v-checkbox>
      </v-container>
    </template>
    <!-- 3 -->
    <div style="height: 100px"></div>
    <div class="font-weight-bold pb-5" style="margin: 0 auto">
      indeterminate : 미정의
    </div>
    <template>
      <v-container fluid>
        <v-row class="light--text">
          <v-col cols="4"> on </v-col>
          <v-col cols="4"> off </v-col>
          <v-col cols="4"> indeterminate </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-checkbox input-value="true" value></v-checkbox>
          </v-col>
          <v-col cols="4">
            <v-checkbox value></v-checkbox>
          </v-col>
          <v-col cols="4">
            <v-checkbox value indeterminate></v-checkbox>
          </v-col>
        </v-row>
        <v-row class="light--text">
          <v-col cols="4"> on disabled </v-col>
          <v-col cols="4"> off disabled </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-checkbox input-value="true" value disabled></v-checkbox>
          </v-col>
          <v-col cols="4">
            <v-checkbox value disabled></v-checkbox>
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
      ex4: [
        "red",
        "indigo",
        "orange",
        "primary",
        "secondary",
        "success",
        "info",
        "warning",
        "error",
        "red darken-3",
        "indigo darken-3",
        "orange darken-3",
      ],
      selected: ["John"],
    };
  },
};
</script>
