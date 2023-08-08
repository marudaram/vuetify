<template>
  <v-app>
    <div style="height: 100px"></div>
    <div class="font-weight-bold pb-5" style="margin: 0 auto">
      bench - 숫자가 높아질수록 스크롤이 느려짐 -> 최대한 작은 숫자를 유지할
      것을 권고하고 있다
    </div>
    <div>
      <v-responsive max-width="400" class="mx-auto mb-4">
        <v-text-field
          v-model="benched"
          type="number"
          label="Total Benched"
          min="0"
          max="10"
        ></v-text-field>
      </v-responsive>

      <v-card elevation="16" max-width="400" class="mx-auto">
        <v-virtual-scroll
          :bench="benched"
          :items="items"
          height="300"
          item-height="64"
        >
          <template v-slot:default="{ item }">
            <v-list-item :key="item">
              <v-list-item-action>
                <v-btn fab small depressed color="primary">
                  {{ item }}
                </v-btn>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>
                  User Database Record <strong>ID {{ item }}</strong>
                </v-list-item-title>
              </v-list-item-content>

              <v-list-item-action>
                <v-icon small> mdi-open-in-new </v-icon>
              </v-list-item-action>
            </v-list-item>

            <v-divider></v-divider>
          </template>
        </v-virtual-scroll>
      </v-card>
    </div>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    benched: 0,
  }),
  computed: {
    items() {
      return Array.from({ length: this.length }, (k, v) => v + 1);
    },
    length() {
      return 7000;
    },
  },
};
</script>
