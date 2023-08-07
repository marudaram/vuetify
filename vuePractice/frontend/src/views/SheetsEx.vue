<template>
  <v-app>
    <v-container>
      <v-row justify="space-around">
        <v-col
          v-for="elevation in elevations"
          :key="elevation"
          cols="12"
          md="4"
        >
          <v-sheet class="pa-12" color="grey lighten-3">
            <v-sheet
              :elevation="elevation"
              class="mx-auto"
              height="100"
              width="100"
            ></v-sheet>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>

    <!-- 2 -->
    <template>
      <v-container>
        <v-row justify="space-around">
          <v-col
            v-for="rounded in [false, true, 'xl']"
            :key="rounded"
            cols="12"
            md="4"
          >
            <v-sheet class="pa-12" color="grey lighten-3">
              <div></div>
              <v-sheet
                :rounded="rounded"
                class="mx-auto"
                height="100"
                width="100"
              ></v-sheet>
              <div></div>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </template>

    // 3
    <template>
      <v-container>
        <v-row class="flex-child">
          <v-col class="d-flex" cols="12" md="4">
            <v-sheet class="d-flex" color="grey lighten-3" height="424">
              <sheet-footer> #1: (3r x 2c) </sheet-footer>
            </v-sheet>
          </v-col>
          <v-col class="d-flex" cols="12" md="4">
            <v-row class="ma-n3">
              <v-col cols="6">
                <v-sheet class="d-flex" color="green lighten-3" height="150">
                  <sheet-footer> #2: (1r x 1c) </sheet-footer>
                </v-sheet>
              </v-col>

              <v-col cols="6">
                <v-sheet class="d-flex" color="yellow lighten-3" height="150">
                  <sheet-footer> #3: (1r x 1c) </sheet-footer>
                </v-sheet>
              </v-col>

              <v-col cols="12">
                <v-sheet class="d-flex" color="red lighten-3" height="250">
                  <sheet-footer> #5: (2r x 2c) </sheet-footer>
                </v-sheet>
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="6" md="2">
            <v-sheet class="d-flex" color="teal lighten-3" height="300">
              <sheet-footer> #4: (2r x 1c) </sheet-footer>
            </v-sheet>
          </v-col>

          <v-col class="d-flex" cols="6" md="2">
            <v-sheet
              class="d-flex mt-auto"
              color="purple lighten-3"
              height="300"
            >
              <sheet-footer> #6: (2r x 1c) </sheet-footer>
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
    elevations: [6, 12, 18],
  }),
  components: {
    // A simple helper component
    SheetFooter: {
      functional: true,

      render(h, { children }) {
        return h(
          "v-sheet",
          {
            staticClass: "mt-auto align-center justify-center d-flex px-2",
            props: {
              color: "rgba(0, 0, 0, .36)",
              dark: true,
              height: 50,
            },
          },
          children
        );
      },
    },
  },
};
</script>
