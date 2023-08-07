<template>
  <v-app>
    <v-card>
      <v-toolbar color="cyan" dark flat>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Your Dashboard</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>

        <template v-slot:extension>
          <v-tabs v-model="tab" align-with-title>
            <v-tabs-slider color="yellow"></v-tabs-slider>

            <v-tab v-for="item in items" :key="item">
              {{ item }}
            </v-tab>
          </v-tabs>
        </template>
      </v-toolbar>

      <v-tabs-items v-model="tab">
        <v-tab-item v-for="item in items" :key="item">
          <v-card flat>
            <v-card-text v-text="text"></v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>

    <!-- 2 -->
    <template>
      <v-card>
        <v-tabs background-color="deep-purple accent-4" center-active dark>
          <!--center-active 속성을 넣게되면 선택한 메뉴가 가운데로 감-->
          <v-tab>One</v-tab>
          <v-tab>Two</v-tab>
          <v-tab>Three</v-tab>
          <v-tab>Four</v-tab>
          <v-tab>Five</v-tab>
          <v-tab>Six</v-tab>
          <v-tab>Seven</v-tab>
          <v-tab>Eight</v-tab>
          <v-tab>Nine</v-tab>
          <v-tab>Ten</v-tab>
          <v-tab>Eleven</v-tab>
          <v-tab>Twelve</v-tab>
          <v-tab>Thirteen</v-tab>
          <v-tab>Fourteen</v-tab>
          <v-tab>Fifteen</v-tab>
          <v-tab>Sixteen</v-tab>
          <v-tab>Seventeen</v-tab>
          <v-tab>Eighteen</v-tab>
          <v-tab>Nineteen</v-tab>
          <v-tab>Twenty</v-tab>
        </v-tabs>
      </v-card>
    </template>

    <!-- 3 -->
    <template>
      <v-sheet elevation="6">
        <v-tabs
          background-color="cyan"
          dark
          next-icon="mdi-arrow-right-bold-box-outline"
          prev-icon="mdi-arrow-left-bold-box-outline"
          show-arrows
        >
          <v-tabs-slider color="yellow"></v-tabs-slider>
          <v-tab v-for="i in 30" :key="i" :href="'#tab-' + i">
            Item {{ i }}
          </v-tab>
        </v-tabs>
      </v-sheet>
    </template>

    <!-- 4 -->
    <template>
      <v-tabs fixed-tabs background-color="indigo" dark>
        <v-tab> Option </v-tab>
        <v-tab> Another Selection </v-tab>
        <v-tab> Items </v-tab>
        <v-tab> Another Screen </v-tab>
      </v-tabs>
    </template>

    <!-- 5 show-arrows 속성이 있으면 메뉴 끝까지 가더라도 화살표가 남아있음 -->
    <template>
      <v-card>
        <v-tabs dark background-color="teal darken-3" show-arrows>
          <v-tabs-slider color="teal lighten-3"></v-tabs-slider>

          <v-tab v-for="i in 30" :key="i" :href="'#tab-' + i">
            Item {{ i }}
          </v-tab>
        </v-tabs>
      </v-card>
    </template>

    <!-- 6 -->
    <template>
      <v-card>
        <v-tabs color="deep-purple accent-4" right>
          <v-tab>Landscape</v-tab>
          <v-tab>City</v-tab>
          <v-tab>Abstract</v-tab>

          <v-tab-item v-for="n in 3" :key="n">
            <v-container fluid>
              <v-row>
                <v-col v-for="i in 6" :key="i" cols="12" md="4">
                  <v-img
                    :src="`https://picsum.photos/500/300?image=${
                      i * n * 5 + 10
                    }`"
                    :lazy-src="`https://picsum.photos/10/6?image=${
                      i * n * 5 + 10
                    }`"
                    aspect-ratio="1"
                  ></v-img>
                </v-col>
              </v-row>
            </v-container>
          </v-tab-item>
        </v-tabs>
      </v-card>
    </template>

    <!-- 7 -->
    <template>
      <v-card>
        <v-toolbar flat color="primary" dark>
          <v-toolbar-title>User Profile</v-toolbar-title>
        </v-toolbar>
        <v-tabs vertical>
          <v-tab>
            <v-icon left> mdi-account </v-icon>
            Option 1
          </v-tab>
          <v-tab>
            <v-icon left> mdi-lock </v-icon>
            Option 2
          </v-tab>
          <v-tab>
            <v-icon left> mdi-access-point </v-icon>
            Option 3
          </v-tab>

          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <p>
                  Sed aliquam ultrices mauris. Donec posuere vulputate arcu.
                  Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
                </p>

                <p>
                  Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel,
                  lacus. Aenean tellus metus, bibendum sed, posuere ac, mattis
                  non, nunc. Aliquam lobortis. Aliquam lobortis. Suspendisse non
                  nisl sit amet velit hendrerit rutrum.
                </p>

                <p class="mb-0">
                  Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu.
                  Pellentesque libero tortor, tincidunt et, tincidunt eget,
                  semper nec, quam. Phasellus blandit leo ut odio.
                </p>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <p>
                  Morbi nec metus. Suspendisse faucibus, nunc et pellentesque
                  egestas, lacus ante convallis tellus, vitae iaculis lacus elit
                  id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum
                  aliquam libero, non adipiscing dolor urna a orci. Curabitur
                  ligula sapien, tincidunt non, euismod vitae, posuere
                  imperdiet, leo. Nunc sed turpis.
                </p>

                <p>
                  Suspendisse feugiat. Suspendisse faucibus, nunc et
                  pellentesque egestas, lacus ante convallis tellus, vitae
                  iaculis lacus elit id tortor. Proin viverra, ligula sit amet
                  ultrices semper, ligula arcu tristique sapien, a accumsan nisi
                  mauris ac eros. In hac habitasse platea dictumst. Fusce ac
                  felis sit amet ligula pharetra condimentum.
                </p>

                <p>
                  Sed consequat, leo eget bibendum sodales, augue velit cursus
                  nunc, quis gravida magna mi a libero. Nam commodo suscipit
                  quam. In consectetuer turpis ut velit. Sed cursus turpis vitae
                  tortor. Aliquam eu nunc.
                </p>

                <p>
                  Etiam ut purus mattis mauris sodales aliquam. Ut varius
                  tincidunt libero. Aenean viverra rhoncus pede. Duis leo. Fusce
                  fermentum odio nec arcu.
                </p>

                <p class="mb-0">
                  Donec venenatis vulputate lorem. Aenean viverra rhoncus pede.
                  In dui magna, posuere eget, vestibulum et, tempor auctor,
                  justo. Fusce commodo aliquam arcu. Suspendisse enim turpis,
                  dictum sed, iaculis a, condimentum nec, nisi.
                </p>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <p>
                  Fusce a quam. Phasellus nec sem in justo pellentesque
                  facilisis. Nam eget dui. Proin viverra, ligula sit amet
                  ultrices semper, ligula arcu tristique sapien, a accumsan nisi
                  mauris ac eros. In dui magna, posuere eget, vestibulum et,
                  tempor auctor, justo.
                </p>

                <p class="mb-0">
                  Cras sagittis. Phasellus nec sem in justo pellentesque
                  facilisis. Proin sapien ipsum, porta a, auctor quis, euismod
                  ut, mi. Donec quam felis, ultricies nec, pellentesque eu,
                  pretium quis, sem. Nam at tortor in tellus interdum sagittis.
                </p>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </v-card>
    </template>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      items: ["web", "shopping", "videos", "images", "news"],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
};
</script>
