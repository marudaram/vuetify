<template>
  <v-app>
    <v-card flat>
      <v-card-text>
        <v-container fluid>
          <v-row>
            <v-col cols="12" sm="6" md="6">
              <v-radio-group v-model="ex7" column>
                <v-radio label="red" color="red" value="red"></v-radio>
                <v-radio
                  label="red darken-3"
                  color="red darken-3"
                  value="red darken-3"
                ></v-radio>
                <v-radio label="indigo" color="indigo" value="indigo"></v-radio>
                <v-radio
                  label="indigo darken-3"
                  color="indigo darken-3"
                  value="indigo darken-3"
                ></v-radio>
                <v-radio label="orange" color="orange" value="orange"></v-radio>
                <v-radio
                  label="orange darken-3"
                  color="orange darken-3"
                  value="orange darken-3"
                ></v-radio>
              </v-radio-group>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-radio-group v-model="ex8" column>
                <v-radio
                  label="primary"
                  color="primary"
                  value="primary"
                ></v-radio>
                <v-radio
                  label="secondary"
                  color="secondary"
                  value="secondary"
                ></v-radio>
                <v-radio
                  label="success"
                  color="success"
                  value="success"
                ></v-radio>
                <v-radio label="info" color="info" value="info"></v-radio>
                <v-radio
                  label="warning"
                  color="warning"
                  value="warning"
                ></v-radio>
                <v-radio label="error" color="error" value="error"></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
    <!-- 2 -->
    <!-- column, row로 방향을 정한다 -->
    <div style="height: 100px"></div>
    <div class="font-weight-bold pb-5" style="margin: 0 auto">
      column, row로 방향을 정한다
    </div>
    <template>
      <v-container fluid>
        <v-radio-group v-model="column" column>
          <v-radio label="Option 1" value="radio-1"></v-radio>
          <v-radio label="Option 2" value="radio-2"></v-radio>
        </v-radio-group>
        <hr />
        <v-radio-group v-model="row" row>
          <v-radio label="Option 1" value="radio-1"></v-radio>
          <v-radio label="Option 2" value="radio-2"></v-radio>
        </v-radio-group>
      </v-container>
    </template>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      ex7: "red",
      ex8: "primary",
      column: null,
      row: null,
    };
  },
};
</script>
