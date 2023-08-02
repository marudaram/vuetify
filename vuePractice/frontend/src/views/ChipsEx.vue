<template>
  <v-app>
    <div class="text-center">
      <v-btn
        v-if="!chip1 && !chip2 && !chip3 && !chip4"
        close
        color="primary"
        dark
        @click="(chip1 = true), (chip2 = true), (chip3 = true), (chip4 = true)"
      >
        Reset Chips
      </v-btn>

      <v-chip v-if="chip1" class="ma-2" close @click:close="chip1 = false">
        Closable
      </v-chip>

      <v-chip
        v-if="chip2"
        class="ma-2"
        close
        color="red"
        text-color="white"
        @click:close="chip2 = false"
      >
        Remove
      </v-chip>

      <v-chip
        v-if="chip3"
        class="ma-2"
        close
        color="green"
        outlined
        @click:close="chip3 = false"
      >
        Success
      </v-chip>

      <v-chip
        v-if="chip4"
        class="ma-2"
        close
        color="orange"
        label
        outlined
        @click:close="chip4 = false"
      >
        Complete
      </v-chip>
    </div>
    <!-- 2 드래그 할 수 있는 chips -->
    <v-row justify="center" align="center">
      <v-chip draggable> Default </v-chip>
    </v-row>
    <!-- 3 -->
    <v-row justify="space-around" align="center">
      <v-chip class="ma-2" :input-value="active" filter> I'm v-chip </v-chip>

      <v-chip class="ma-2" :input-value="active" filter filter-icon="mdi-plus">
        I'm v-chip
      </v-chip>

      <v-chip class="ma-2" :input-value="active" filter filter-icon="mdi-minus">
        I'm v-chip
      </v-chip>

      <v-switch v-model="active" label="Active"></v-switch>
    </v-row>
    <!-- 4 -->
    <div class="text-center">
      <v-chip class="ma-2" label> Label </v-chip>

      <v-chip class="ma-2" color="pink" label text-color="white">
        <v-icon left> mdi-label </v-icon>
        Tags
      </v-chip>

      <v-chip class="ma-2" color="primary" label>
        <v-icon left> mdi-account-circle-outline </v-icon>
        John Leider
      </v-chip>

      <v-chip class="ma-2" close color="cyan" label text-color="white">
        <v-icon left> mdi-twitter </v-icon>
        New Tweets
      </v-chip>
    </div>
    <!-- 5 -->
    <div class="text-center">
      <v-chip class="ma-2" color="success" outlined>
        <v-icon left> mdi-server-plus </v-icon>
        Server Status
      </v-chip>

      <v-chip class="ma-2" color="primary" outlined pill>
        User Account
        <v-icon right> mdi-account-outline </v-icon>
      </v-chip>

      <v-chip class="ma-2" color="deep-purple accent-4" outlined>
        <v-icon left> mdi-wrench </v-icon>
        Update Settings
      </v-chip>

      <v-chip class="ma-2" close color="indigo darken-3" outlined>
        <v-icon left> mdi-fire </v-icon>
        New Posts Available
      </v-chip>
    </div>
    <!-- 6 -->
    <v-card class="mx-auto" max-width="450">
      <!-- contain: Prevents the image from being cropped if it doesn’t fit -->
      <v-img
        src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
        :aspect-ratio="16 / 9"
      >
      </v-img>
      <v-card-title>
        <div class="text-h4 mb-2">Welcome Home...</div>
        <div class="text-h6 font-weight-regular grey--text">
          Monday, 12:30 PM, Mostly Sunny
        </div>
      </v-card-title>
      <v-row class="px-4 grey--text" align="center">
        <v-avatar size="24" class="mr-4">
          <v-img
            src="https://cdn.vuetifyjs.com/images/weather/part-cloud-48px.png"
            contain
          ></v-img>
        </v-avatar>

        <span>81° / 62°</span>
      </v-row>

      <v-divider class="mt-6 mx-4"></v-divider>

      <v-card-text>
        <v-chip class="mr-2" @click="lights">
          <v-icon left> mdi-brightness-5 </v-icon>
          Turn on Lights
        </v-chip>
        <v-chip class="mr-2" @click="alarm">
          <v-icon left> mdi-alarm-check </v-icon>
          Set alarm
        </v-chip>
        <v-chip @click="blinds">
          <v-icon left> mdi-blinds </v-icon>
          Close blinds
        </v-chip>
      </v-card-text>
    </v-card>
    <!-- 7 -->
    <div class="text-center">
      <v-chip class="ma-2" color="indigo" text-color="white">
        <v-avatar left>
          <v-icon>mdi-account-circle</v-icon>
        </v-avatar>
        Mike
      </v-chip>

      <v-chip class="ma-2" color="orange" text-color="white">
        Premium
        <v-icon right> mdi-star </v-icon>
      </v-chip>

      <v-chip class="ma-2" color="primary" text-color="white">
        1 Year
        <v-icon right> mdi-cake-variant </v-icon>
      </v-chip>

      <v-chip class="ma-2" color="green" text-color="white">
        <v-avatar left class="green darken-4"> 1 </v-avatar>
        Years
      </v-chip>

      <v-chip
        class="ma-2"
        close
        color="teal"
        text-color="white"
        @click:close="close"
      >
        <v-avatar left>
          <v-icon>mdi-checkbox-marked-circle</v-icon>
        </v-avatar>
        Confirmed
      </v-chip>

      <v-chip
        class="ma-2"
        close
        color="teal"
        text-color="white"
        close-icon="mdi-delete"
        @click:close="close"
      >
        <v-avatar left>
          <v-icon>mdi-checkbox-marked-circle</v-icon>
        </v-avatar>
        Confirmed
      </v-chip>
    </div>
    <!-- 8 -->
    <v-card class="mx-auto" max-width="500">
      <v-toolbar flat color="transparent">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title>Photo Info</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="$refs.search.focus()">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-toolbar>

      <v-container class="py-0">
        <v-row align="center" justify="start">
          <v-col
            v-for="(selection, i) in selections"
            :key="selection.text"
            class="shrink"
          >
            <v-chip
              :disabled="loading"
              close
              @click:close="selected.splice(i, 1)"
            >
              <v-icon left v-text="selection.icon"></v-icon>
              {{ selection.text }}
            </v-chip>
          </v-col>

          <v-col v-if="!allSelected" cols="12">
            <v-text-field
              ref="search"
              v-model="search"
              full-width
              hide-details
              label="Search"
              single-line
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>

      <v-divider v-if="!allSelected"></v-divider>

      <v-list>
        <template v-for="item in categories">
          <v-list-item
            v-if="!selected.includes(item)"
            :key="item.text"
            :disabled="loading"
            @click="selected.push(item)"
          >
            <v-list-item-avatar>
              <v-icon :disabled="loading" v-text="item.icon"></v-icon>
            </v-list-item-avatar>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item>
        </template>
      </v-list>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          :disabled="!selected.length"
          :loading="loading"
          color="purple"
          text
          @click="next"
        >
          Next
        </v-btn>
      </v-card-actions>
    </v-card>
    <!-- 9 -->
    <v-card max-width="400" class="mx-auto">
      <v-system-bar></v-system-bar>

      <v-row class="px-6 py-3" align="center">
        <span class="mr-4">To</span>
        <v-menu
          v-model="menu"
          bottom
          right
          transition="scale-transition"
          origin="top left"
        >
          <template v-slot:activator="{ on }">
            <v-chip pill v-on="on">
              <v-avatar left>
                <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
              </v-avatar>
              John Leider
            </v-chip>
          </template>
          <v-card width="300">
            <v-list dark>
              <v-list-item>
                <v-list-item-avatar>
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/john.png"
                  ></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>John Leider</v-list-item-title>
                  <v-list-item-subtitle
                    >john@vuetifyjs.com</v-list-item-subtitle
                  >
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn icon @click="menu = false">
                    <v-icon>mdi-close-circle</v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </v-list>
            <v-list>
              <v-list-item @click="() => {}">
                <v-list-item-action>
                  <v-icon>mdi-briefcase</v-icon>
                </v-list-item-action>
                <v-list-item-subtitle>john@gmail.com</v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-card>
        </v-menu>
      </v-row>

      <v-divider></v-divider>

      <v-text-field
        full-width
        value="Re: Vacation Request"
        label="Subject"
        single-line
      ></v-text-field>

      <v-textarea full-width single-line label="Message"></v-textarea>
    </v-card>
    <!-- 10 -->
    <v-combobox
      v-model="chips"
      :items="items"
      chips
      clearable
      label="Your favorite hobbies"
      multiple
      prepend-icon="mdi-filter-variant"
      solo
    >
      <template v-slot:selection="{ attrs, item, select, selected }">
        <v-chip
          v-bind="attrs"
          :input-value="selected"
          close
          @click="select"
          @click:close="remove(item)"
        >
          <strong>{{ item }}</strong
          >&nbsp;
          <span>(interest)</span>
        </v-chip>
      </template>
    </v-combobox>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      chip1: true,
      chip2: true,
      chip3: true,
      chip4: true,
      active: false,
      //   items: [
      //     {
      //       text: "Nature",
      //       icon: "mdi-nature",
      //     },
      //     {
      //       text: "Nightlife",
      //       icon: "mdi-glass-wine",
      //     },
      //     {
      //       text: "November",
      //       icon: "mdi-calendar-range",
      //     },
      //     {
      //       text: "Portland",
      //       icon: "mdi-map-marker",
      //     },
      //     {
      //       text: "Biking",
      //       icon: "mdi-bike",
      //     },
      //   ],
      chips: [
        "Programming",
        "Playing video games",
        "Watching movies",
        "Sleeping",
      ],
      items: ["Streaming", "Eating"],
      loading: false,
      search: "",
      selected: [],
      menu: false,
    };
  },
  methods: {
    alarm() {
      alert("Turning on alarm...");
    },
    blinds() {
      alert("Toggling Blinds...");
    },
    lights() {
      alert("Toggling lights...");
    },
    close() {
      alert("Chip close clicked");
    },
    next() {
      this.loading = true;

      setTimeout(() => {
        this.search = "";
        this.selected = [];
        this.loading = false;
      }, 2000);
    },
    remove(item) {
      this.chips.splice(this.chips.indexOf(item), 1);
    },
  },
  computed: {
    allSelected() {
      return this.selected.length === this.items.length;
    },
    categories() {
      const search = this.search.toLowerCase();

      if (!search) return this.items;

      return this.items.filter((item) => {
        const text = item.text.toLowerCase();

        return text.indexOf(search) > -1;
      });
    },
    selections() {
      const selections = [];

      for (const selection of this.selected) {
        selections.push(selection);
      }

      return selections;
    },
  },

  watch: {
    selected() {
      this.search = "";
    },
  },
};
</script>
