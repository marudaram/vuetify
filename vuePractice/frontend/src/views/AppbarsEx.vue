<template>
  <v-app>
    <div style="height: 100px"></div>
    <div class="font-weight-bold pb-5" style="margin: 0 auto">
      collapse-on-scroll 속성을 줄 경우 스크롤하면서 상단 바가 작아지게됨 <br />
      scroll-target으로 어떤 화면을 타게팅할 것인지 결정, 해당 태그의 아이디를
      적는다
    </div>
    <v-card class="overflow-hidden">
      <v-app-bar
        :collapse="!collapseOnScroll"
        :collapse-on-scroll="collapseOnScroll"
        absolute
        color="deep-purple accent-4"
        dark
        scroll-target="#scrolling-techniques-6"
      >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Collapsing Bar</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-checkbox
          v-model="collapseOnScroll"
          color="white"
          hide-details
        ></v-checkbox>
      </v-app-bar>
      <v-sheet
        id="scrolling-techniques-6"
        class="overflow-y-auto"
        max-height="600"
      >
        <v-container style="height: 1000px"> </v-container>
      </v-sheet>
    </v-card>
    <!-- 2 -->
    <div style="height: 100px"></div>
    <div class="font-weight-bold pb-5" style="margin: 0 auto">
      shrink-on-scroll - 스크롤하면서 작아지게 설정 / fade-img-on-scroll -
      스크롤하면서 이미지가 fade됨 <br />
    </div>
    <v-card class="overflow-hidden">
      <v-app-bar
        absolute
        color="#6A76AB"
        dark
        shrink-on-scroll
        prominent
        src="https://picsum.photos/1920/1080?random"
        fade-img-on-scroll
        scroll-target="#scrolling-techniques-3"
      >
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
          ></v-img>
        </template>

        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-app-bar-title>Title</v-app-bar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>

        <template v-slot:extension>
          <v-tabs align-with-title>
            <v-tab>Tab 1</v-tab>
            <v-tab>Tab 2</v-tab>
            <v-tab>Tab 3</v-tab>
          </v-tabs>
        </template>
      </v-app-bar>
      <v-sheet
        id="scrolling-techniques-3"
        class="overflow-y-auto"
        max-height="600"
      >
        <v-container style="height: 1000px"></v-container>
      </v-sheet>
    </v-card>
    <!-- 3 -->
    <!-- inverted-scroll: 뒤바뀐 -->
    <div style="height: 100px"></div>
    <div class="font-weight-bold pb-5" style="margin: 0 auto">
      inverted-scroll: 뒤바뀐
    </div>
    <v-card class="overflow-hidden">
      <v-app-bar
        absolute
        color="primary"
        dark
        inverted-scroll
        scroll-target="#scrolling-techniques-8"
      >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Title</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>
      <v-sheet
        id="scrolling-techniques-8"
        class="overflow-y-auto"
        max-height="600"
      >
        <v-container style="height: 1500px"> </v-container>
      </v-sheet>
    </v-card>
    <!-- 5 -->
    <v-card class="overflow-hidden">
      <v-app-bar
        absolute
        color="#43a047"
        dark
        shrink-on-scroll
        prominent
        src="https://picsum.photos/1920/1080?random"
        fade-img-on-scroll
        scroll-target="#scrolling-techniques-5"
        scroll-threshold="500"
      >
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
          ></v-img>
        </template>

        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-app-bar-title>Title</v-app-bar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>
      <v-sheet
        id="scrolling-techniques-5"
        class="overflow-y-auto"
        max-height="600"
      >
        <v-container style="height: 1500px"></v-container>
      </v-sheet>
    </v-card>
    <!-- 6 -->
    <v-card class="overflow-hidden">
      <v-app-bar
        absolute
        color="#6A76AB"
        dark
        shrink-on-scroll
        prominent
        src="https://picsum.photos/1920/1080?random"
        fade-img-on-scroll
        scroll-target="#scrolling-techniques-4"
      >
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
          ></v-img>
        </template>

        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Title</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-menu bottom left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon color="yellow" v-bind="attrs" v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item>
              <v-list-item-title>Click Me 1</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>Click Me 2</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>Click Me 3</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>Click Me 4</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <template v-slot:extension>
          <v-tabs align-with-title>
            <v-tab>Tab 1</v-tab>

            <v-tab>Tab 2</v-tab>

            <v-tab>Tab 3</v-tab>
          </v-tabs>
        </template>
      </v-app-bar>
      <v-sheet
        id="scrolling-techniques-4"
        class="overflow-y-auto"
        max-height="600"
      >
        <v-container style="height: 1000px"></v-container>
      </v-sheet>
    </v-card>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    collapseOnScroll: true,
  }),
};
</script>
