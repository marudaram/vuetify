<template>
  <v-app>
    <v-row>
      <v-col cols="12" sm="6" offset-sm="3">
        <v-card>
          <v-list two-line>
            <template v-for="(item, index) in items.slice(0, 6)">
              <v-subheader v-if="item.header" :key="item.header">
                {{ item.header }}
              </v-subheader>
              <v-divider
                v-else-if="item.divider"
                :key="index"
                :inset="item.inset"
              ></v-divider>
              <v-list-item v-else :key="item.title">
                <v-list-item-avatar>
                  <img :src="item.avatar" />
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title v-html="item.title"></v-list-item-title>
                  <v-list-item-subtitle
                    v-html="item.subtitle"
                  ></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
    <!-- 2 -->
    <template>
      <v-toolbar color="purple" dark>
        <v-toolbar-title>Title</v-toolbar-title>

        <v-divider class="mx-4" vertical></v-divider>

        <span class="subheading">My Home</span>

        <v-spacer></v-spacer>

        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn text> News </v-btn>

          <v-divider vertical></v-divider>

          <v-btn text> Blog </v-btn>

          <v-divider vertical></v-divider>

          <v-btn text> Music </v-btn>

          <v-divider vertical></v-divider>
        </v-toolbar-items>

        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </v-toolbar>
    </template>
    <!-- 3 -->
    <template>
      <v-row justify="center">
        <v-col cols="12" sm="8">
          <v-card>
            <v-card-title class="cyan darken-1">
              <span class="text-h5 white--text">Sarah Mcbeal</span>

              <v-spacer></v-spacer>

              <v-btn dark icon>
                <v-icon>mdi-chevron-left</v-icon>
              </v-btn>

              <v-btn dark icon>
                <v-icon>mdi-pencil</v-icon>
              </v-btn>

              <v-btn dark icon>
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </v-card-title>

            <v-list>
              <v-list-item>
                <v-list-item-action>
                  <v-icon>mdi-phone</v-icon>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title>(650) 555-1234</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                  <v-icon>mdi-message-text</v-icon>
                </v-list-item-action>
              </v-list-item>
              <!-- inset: Adds indentation(들여쓰기) (72px) for normal dividers, reduces max height for vertical. -->
              <v-divider inset></v-divider>

              <v-list-item>
                <v-list-item-action>
                  <v-icon>mdi-phone</v-icon>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title>(323) 555-6789</v-list-item-title>
                </v-list-item-content>

                <v-list-item-action>
                  <v-icon>mdi-message-text</v-icon>
                </v-list-item-action>
              </v-list-item>

              <v-divider inset></v-divider>

              <v-list-item>
                <v-list-item-action>
                  <v-icon>mdi-email</v-icon>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title>mcbeal@example.com</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-divider inset></v-divider>

              <v-list-item>
                <v-list-item-action>
                  <v-icon>mdi-map-marker</v-icon>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title>Orlando, FL 79938</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>

            <v-img
              src="https://picsum.photos/700?image=996"
              height="200px"
            ></v-img>
          </v-card>
        </v-col>
      </v-row>
    </template>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    items: [
      { header: "Today" },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        title: "Brunch this weekend?",
        subtitle: `<span class="font-weight-bold">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
        subtitle: `<span class="font-weight-bold">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        title: "Oui oui",
        subtitle:
          '<span class="font-weight-bold">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
      },
    ],
  }),
};
</script>
