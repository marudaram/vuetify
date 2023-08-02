<template>
  <v-app>
    <v-range-slider
      hint="Im a hint"
      max="100"
      min="-83"
      persistent-hint
    ></v-range-slider>
    <!-- 2 -->
    <template>
      <v-container>
        <v-row>
          <v-range-slider
            v-model="value"
            vertical
            label="Range"
          ></v-range-slider>
        </v-row>
      </v-container>
    </template>
    <!-- 3 -->
    <template>
      <v-row>
        <v-col class="pa-12">
          <v-range-slider
            :tick-labels="seasons"
            :value="[0, 1]"
            min="0"
            max="3"
            ticks="always"
            tick-size="4"
          >
            <template v-slot:thumb-label="props">
              <v-icon dark>
                {{ season(props.value) }}
              </v-icon>
            </template>
          </v-range-slider>
        </v-col>
      </v-row>
    </template>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      value: [20, 40],
      seasons: ["Winter", "Spring", "Summer", "Fall"],
      icons: ["mdi-snowflake", "mdi-leaf", "mdi-fire", "mdi-water"],
    };
  },
  methods: {
    season(val) {
      return this.icons[val];
    },
  },
};
</script>
