<template>
  <v-app>
    <v-card>
      <v-responsive :aspect-ratio="16 / 9" class="b">
        <v-card-text class="a"> 가로:높이 비율을 의미 - 16:9 </v-card-text>
      </v-responsive>
    </v-card>
  </v-app>
</template>

<style scoped>
.b {
  border: 1px solid red;
}
.a {
  border: 1px solid blue;
}
</style>
