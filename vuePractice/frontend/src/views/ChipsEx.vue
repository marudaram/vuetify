<template>
  <v-app>
    <div class="font-weight-bold ml-8 mb-2">
      v-if를 이용하여 클릭시 boolean 값을 주고 사라지게 설정할 수 있음
    </div>
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
    <div style="height: 100px"></div>
    <!-- 2 드래그 할 수 있는 chips -->
    <div class="font-weight-bold pb-5" style="margin: 0 auto">
      드래그 할 수 있는 chips
    </div>
    <v-row justify="center" align="center">
      <v-chip draggable> Default </v-chip>
    </v-row>
    <!-- 3 -->
    <div style="height: 100px"></div>
    <div class="font-weight-bold pb-5" style="margin: 0 auto">
      :input-value="active" 설정
    </div>
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
    <div style="height: 100px"></div>
    <div class="font-weight-bold pb-5" style="margin: 0 auto">
      color 속성으로 색 변경 가능 / v-icon 추가하여 아이콘 삽입가능
    </div>
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
    <div style="height: 100px"></div>
    <div class="font-weight-bold pb-5" style="margin: 0 auto">
      outlined 속성
    </div>
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
    <div style="height: 100px"></div>
    <div class="font-weight-bold pb-5" style="margin: 0 auto">
      v-card를 이용하여 다양한 요소들을 묶어 사용하면 좋다
      <br />
      이미지에서의 contain 속성: Prevents the image from being cropped if it
      doesn’t fit
    </div>
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
    <div style="height: 100px"></div>
    <div class="font-weight-bold pb-5" style="margin: 0 auto">
      v-avatar과 v-icon을 같이 사용할 수 있음 / 첫번째 chips의 경우 v-chip 안에
      v-avatar 안에 v-icon이 들어감
    </div>
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

    <!-- 9 -->
    <div style="height: 100px"></div>
    <div class="font-weight-bold pb-5" style="margin: 0 auto">
      v-chip의 pill 속성은 약모양처럼 좌우 둥글게 표현해줌 / avatar에 이미지를
      넣어 표현 가능
    </div>
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
    <div style="height: 100px"></div>
    <div class="font-weight-bold pb-5" style="margin: 0 auto">
      v-combobox로 연출 가능
    </div>
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
