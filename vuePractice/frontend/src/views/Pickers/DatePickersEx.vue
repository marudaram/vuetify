<template>
  <v-app>
    <v-row justify="center">
      <v-date-picker
        v-model="date"
        :allowed-dates="allowedDates"
        class="mt-4"
        min="2016-06-15"
        max="2018-03-20"
      ></v-date-picker>
    </v-row>

    <!-- 2 -->
    <template>
      <v-row justify="space-around">
        <v-date-picker v-model="picker" color="green lighten-1"></v-date-picker>
        <v-date-picker
          v-model="picker2"
          color="green lighten-1"
          header-color="primary"
        ></v-date-picker>
      </v-row>
    </template>

    <!-- 3 -->
    <template>
      <v-row justify="space-between">
        <div>
          <div class="subheading">Defined by array</div>
          <v-date-picker
            v-model="date1"
            :events="arrayEvents"
            event-color="green lighten-1"
          ></v-date-picker>
        </div>
        <div>
          <div class="subheading">Defined by function</div>
          <v-date-picker
            v-model="date2"
            :event-color="(date) => (date[9] % 2 ? 'red' : 'yellow')"
            :events="functionEvents"
          ></v-date-picker>
        </div>
      </v-row>
    </template>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    date: "2018-03-02",
    picker: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    picker2: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    arrayEvents: null,
    date1: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    date2: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
  }),

  methods: {
    allowedDates: (val) => parseInt(val.split("-")[2], 10) % 2 === 0,
    functionEvents(date) {
      const [, , day] = date.split("-");
      if ([12, 17, 28].includes(parseInt(day, 10))) return true;
      if ([1, 19, 22].includes(parseInt(day, 10))) return ["red", "#00f"];
      return false;
    },
  },
  mounted() {
    this.arrayEvents = [...Array(6)].map(() => {
      const day = Math.floor(Math.random() * 30);
      const d = new Date();
      d.setDate(day);
      return d.toISOString().substr(0, 10);
    });
  },
};
</script>
