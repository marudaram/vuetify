<template>
  <v-app>
    <div class="text-center">
      <v-pagination v-model="page" :length="6"></v-pagination>
    </div>

    <!-- 2 -->
    <template>
      <div class="text-center">
        <v-pagination v-model="page" :length="4" circle></v-pagination>
      </div>
    </template>

    <!-- 3 -->
    <template>
      <div class="text-center">
        <v-pagination
          v-model="page"
          :length="4"
          prev-icon="mdi-menu-left"
          next-icon="mdi-menu-right"
        ></v-pagination>
      </div>
    </template>

    <!-- 4 -->
    <template>
      <div class="text-center">
        <v-pagination
          v-model="page"
          :length="15"
          :total-visible="9"
        ></v-pagination>
      </div>
    </template>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
    };
  },
};
</script>
