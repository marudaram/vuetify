<template>
  <v-app>
    ㄴㄴ
    <div>
      <v-container
        v-for="align in alignments"
        :key="align"
        class="grey lighten-5 mb-6"
      >
        <v-row :align="align" no-gutters style="height: 150px">
          <v-col v-for="n in 3" :key="n">
            <v-card class="pa-2" outlined tile> One of three columns </v-card>
          </v-col>
        </v-row>
      </v-container>

      <v-container class="grey lighten-5">
        <v-row no-gutters style="height: 150px">
          <v-col v-for="align in alignments" :key="align" :align-self="align">
            <v-card class="pa-2" outlined tile> One of three columns </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- 2 -->
    <template>
      <v-container class="grey lighten-5">
        <v-row no-gutters>
          <v-col cols="12">
            <v-card class="pa-2" outlined tile> .col-9 </v-card>
          </v-col>
          <v-col cols="5">
            <v-card class="pa-2" outlined tile>
              .col-4<br />Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets
              wrapped onto a new line as one contiguous unit.
            </v-card>
          </v-col>
          <v-col cols="7">
            <v-card class="pa-2" outlined tile>
              .col-6<br />Subsequent columns continue along the new line.
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </template>
    <!-- 3 -->
    <template>
      <div class="ma-5 pa-5">
        <v-container class="grey lighten-5">
          <v-row>
            <v-col md="3">
              <v-card class="pa-2" outlined tile> .col-md-4 </v-card>
            </v-col>
            <v-col md="4" class="ml-auto">
              <v-card class="pa-2" outlined tile> .col-md-4 .ml-auto </v-card>
            </v-col>
            <v-col md="4" class="ml-auto">
              <v-card class="pa-2" outlined tile> .col-md-4 .ml-auto </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col md="7" class="ml-md-auto">
              <v-card class="pa-2" outlined tile>
                .col-md-3 .ml-md-auto
              </v-card>
            </v-col>
            <v-col md="3" class="ml-md-auto">
              <v-card class="pa-2" outlined tile>
                .col-md-3 .ml-md-auto
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto" class="mr-auto">
              <v-card class="pa-2" outlined tile> .col-auto .mr-auto </v-card>
            </v-col>
            <v-col cols="auto">
              <v-card class="pa-2" outlined tile> .col-auto </v-card>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </template>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    alignments: ["start", "center", "end"],
  }),
};
</script>
