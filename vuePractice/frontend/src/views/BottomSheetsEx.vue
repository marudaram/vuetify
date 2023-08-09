<template>
  <v-app>
    <div class="font-weight-bold pb-5" style="margin: 0 auto">
      inset: 테두리와 element 사이의 내부 공간 / inset이 추가되면 올라오는
      sheets의 크기가 줄어든다 / hide-overlay속성을 추가하면 창이 올라왔을 때
      바깥 부분이 어두워지지 않는다 / persistent속성을 추가하면 바깥 부분을
      눌러도 취소되지 않는다
    </div>
    <div class="text-center">
      <v-bottom-sheet v-model="sheet" inset>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="orange" dark v-bind="attrs" v-on="on">
            Open Inset
          </v-btn>
        </template>
        <v-sheet class="text-center" height="200px">
          <v-btn class="mt-6" text color="error" @click="sheet = !sheet">
            close
          </v-btn>
          <div class="my-3">This is a bottom sheet using the inset prop</div>
        </v-sheet>
      </v-bottom-sheet>
    </div>
    <!-- 2 -->
    <div style="height: 100px"></div>
    <div class="font-weight-bold pb-5" style="margin: 0 auto">
      activator를 대신해서 v-model을 사용할 수 있다
    </div>
    <div class="text-center">
      <v-btn color="blue" dark @click="sheet = !sheet"> Open v-model </v-btn>
      <v-bottom-sheet v-model="sheet">
        <v-sheet class="text-center" height="200px">
          <v-btn class="mt-6" text color="red" @click="sheet = !sheet">
            close
          </v-btn>
          <div class="py-3">
            This is a bottom sheet using the controlled by v-model instead of
            activator
          </div>
        </v-sheet>
      </v-bottom-sheet>
    </div>
    <!-- 3 -->
    <div style="height: 100px"></div>
    <div class="font-weight-bold pb-5" style="margin: 0 auto">
      persistent를 사용하면 바깥부분을 클릭해도 창이 꺼지지 않는다
    </div>

    <div class="text-center">
      <v-bottom-sheet v-model="sheet" persistent>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="green" dark v-bind="attrs" v-on="on">
            Open Persistent
          </v-btn>
        </template>
        <v-sheet class="text-center" height="200px">
          <v-btn class="mt-6" text color="error" @click="sheet = !sheet">
            close
          </v-btn>
          <div class="py-3">
            This is a bottom sheet using the persistent prop
          </div>
        </v-sheet>
      </v-bottom-sheet>
    </div>
    <!-- 4 -->
    <div style="height: 100px"></div>
    <div class="font-weight-bold pb-5" style="margin: 0 auto">
      v-bottom-sheet를 이용해서 음악창을 만들 수 있다
    </div>
    <div class="text-center">
      <v-bottom-sheet inset>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="red" dark v-bind="attrs" v-on="on"> Open Player </v-btn>
        </template>
        <v-card tile>
          <v-progress-linear
            :value="50"
            class="my-0"
            height="3"
          ></v-progress-linear>

          <v-list>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>The Walker</v-list-item-title>
                <v-list-item-subtitle
                  >Fitz & The Trantrums</v-list-item-subtitle
                >
              </v-list-item-content>

              <v-spacer></v-spacer>

              <v-list-item-icon>
                <v-btn icon>
                  <v-icon>mdi-rewind</v-icon>
                </v-btn>
              </v-list-item-icon>

              <v-list-item-icon
                :class="{ 'mx-5': $vuetify.breakpoint.mdAndUp }"
              >
                <v-btn icon>
                  <v-icon>mdi-pause</v-icon>
                </v-btn>
              </v-list-item-icon>

              <v-list-item-icon
                class="ml-0"
                :class="{ 'mr-3': $vuetify.breakpoint.mdAndUp }"
              >
                <v-btn icon>
                  <v-icon>mdi-fast-forward</v-icon>
                </v-btn>
              </v-list-item-icon>
            </v-list-item>
          </v-list>
        </v-card>
      </v-bottom-sheet>
    </div>
    <!-- 5 -->
    <div style="height: 100px"></div>
    <div class="font-weight-bold pb-5" style="margin: 0 auto">
      다양하게 응용 가능
    </div>
    <div class="text-center">
      <v-bottom-sheet v-model="sheet">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="purple" dark v-bind="attrs" v-on="on"> Open In </v-btn>
        </template>
        <v-list>
          <v-subheader>Open in</v-subheader>
          <v-list-item
            v-for="tile in tiles"
            :key="tile.title"
            @click="sheet = false"
          >
            <v-list-item-avatar>
              <v-avatar size="32px" tile>
                <img
                  :src="`https://cdn.vuetifyjs.com/images/bottom-sheets/${tile.img}`"
                  :alt="tile.title"
                />
              </v-avatar>
            </v-list-item-avatar>
            <v-list-item-title>{{ tile.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-bottom-sheet>
    </div>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    sheet: false,
    tiles: [
      { img: "keep.png", title: "Keep" },
      { img: "inbox.png", title: "Inbox" },
      { img: "hangouts.png", title: "Hangouts" },
      { img: "messenger.png", title: "Messenger" },
      { img: "google.png", title: "Google+" },
    ],
  }),
};
</script>
