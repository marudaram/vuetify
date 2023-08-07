<template>
  <v-app>
    기본 트리뷰
    <v-treeview :items="items"></v-treeview>

    <div style="height: 50px"></div>

    <!-- 2 rounded & hoverable이기 때문에 마우스를 올릴 때 동그랗게 호버 효과가 나옴-->
    rounded & hoverable이기 때문에 마우스를 올릴 때 동그랗게 호버 효과가 나옴
    <template>
      <v-treeview rounded hoverable activatable :items="items"></v-treeview>
    </template>

    <div style="height: 50px"></div>

    <!-- 3 select 기능을 넣을 수 있음-->
    select 기능을 넣을 수 있음
    <template>
      <v-treeview selectable :items="items"></v-treeview>
    </template>

    <div style="height: 50px"></div>

    <!-- 4 shaped-->
    shaped
    <template>
      <v-treeview shaped hoverable activatable :items="items"></v-treeview>
    </template>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        id: 1,
        name: "Applications :",
        children: [
          { id: 2, name: "Calendar : app" },
          { id: 3, name: "Chrome : app" },
          { id: 4, name: "Webstorm : app" },
        ],
      },
      {
        id: 5,
        name: "Documents :",
        children: [
          {
            id: 6,
            name: "vuetify :",
            children: [
              {
                id: 7,
                name: "src :",
                children: [
                  { id: 8, name: "index : ts" },
                  { id: 9, name: "bootstrap : ts" },
                ],
              },
            ],
          },
          {
            id: 10,
            name: "material2 :",
            children: [
              {
                id: 11,
                name: "src :",
                children: [
                  { id: 12, name: "v-btn : ts" },
                  { id: 13, name: "v-card : ts" },
                  { id: 14, name: "v-window : ts" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 15,
        name: "Downloads :",
        children: [
          { id: 16, name: "October : pdf" },
          { id: 17, name: "November : pdf" },
          { id: 18, name: "Tutorial : html" },
        ],
      },
      {
        id: 19,
        name: "Videos :",
        children: [
          {
            id: 20,
            name: "Tutorials :",
            children: [
              { id: 21, name: "Basic layouts : mp4" },
              { id: 22, name: "Advanced techniques : mp4" },
              { id: 23, name: "All about app : dir" },
            ],
          },
          { id: 24, name: "Intro : mov" },
          { id: 25, name: "Conference introduction : avi" },
        ],
      },
    ],
  }),
};
</script>
