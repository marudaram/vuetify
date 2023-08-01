<template>
  <v-app>
    <p>v-app은 프로젝트에 한 번만 선언하며 모든 것을 감싸야 한다</p>
    <v-app-bar
      >v-app-bar v-app-bar은 하나만 가능, v-toolbar는 여러개가
      가능하다</v-app-bar
    >
    <v-app-bar collapse>v-app-bar collapse</v-app-bar>
    <v-app-bar collapse-on-scroll
      >v-app-bar collapse-on-scroll - 스크롤하면 작아짐</v-app-bar
    >
    <v-app-bar color="green" dark>v-app-bar green dark</v-app-bar>
    <v-app-bar color="pink" dense>v-app-bar pink dense</v-app-bar>
    <v-app-bar color="yellow" elevation-on-scroll
      >v-app-bar yellow elevation-on-scroll</v-app-bar
    >
    <v-app-bar color="blue" extended>v-app-bar blue extended</v-app-bar>
    <v-app-bar color="purple" rounded>v-app-bar purple rounded</v-app-bar>

    <v-navigation-drawer expand-on-hover
      >v-navigation-drawer</v-navigation-drawer
    >
    <v-content
      ><v-container
        >v-content 부분 - v-container를 안에 넣으면 자동으로 좌우여백이
        생긴다</v-container
      ></v-content
    >
    <v-footer outlined>v-footer outlined</v-footer>
    <v-footer padless>v-footer padless</v-footer>
    <v-footer rounded>v-footer rounded</v-footer>
    <v-footer shaped color="red">v-footer shaped</v-footer>

    <v-bottom-navigation color="green"
      >v-bottom-navigation color="green"</v-bottom-navigation
    >
    <v-bottom-navigation background-color="green"
      >v-bottom-navigation background-color="green"</v-bottom-navigation
    >
  </v-app>
</template>
