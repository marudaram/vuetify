<template>
  <v-app>
    <v-file-input
      chips
      counter
      multiple
      show-size
      small-chips
      truncate-length="9"
    ></v-file-input>
    <!-- 2 -->
    <template>
      <v-file-input
        label="File input"
        filled
        prepend-icon="mdi-camera"
      ></v-file-input>
    </template>
  </v-app>
</template>
