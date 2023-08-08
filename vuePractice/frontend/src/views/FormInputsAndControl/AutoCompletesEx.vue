<template>
  <v-app>
    <div style="height: 100px"></div>
    <div class="font-weight-bold pb-5" style="margin: 0 auto">
      그 외 v-autocomplete 속성 clearable -> input을 지우는 기능을 넣어줌,
      디폴트 아이콘은 mdi-clear 이다 <br />
      hide-selected -> 이미 셀렉 된 아이템은 진열하지 않음 / 복수선택일 경우
      체크박스를 리스트에서 삭제
    </div>
    <div style="height: 100px"></div>
    <div class="font-weight-bold pb-5" style="margin: 0 auto">
      autocomplete은 select 태그 + 검색까지 제공 - chips 이용해서 많이 사용함
      <br />
      outlined / chips / small chips / multiple속성 사용
    </div>
    <v-card>
      <v-container fluid>
        <v-row align="center">
          <v-col cols="12">
            <v-autocomplete
              v-model="values"
              :items="items"
              outlined
              dense
              chips
              small-chips
              label="Outlined"
              multiple
            ></v-autocomplete>
          </v-col>
          <div style="height: 100px"></div>
          <div class="font-weight-bold pb-5" style="margin: 0 auto">
            dense / chips / small chips / multiple / solo - input의 스타일을
            변화시킴
          </div>
          <v-col cols="12">
            <v-autocomplete
              v-model="values"
              :items="items"
              dense
              chips
              small-chips
              label="Solo"
              multiple
              solo
            ></v-autocomplete>
          </v-col>
          <v-col cols="12">
            <div style="height: 100px"></div>
            <div class="font-weight-bold pb-5" style="margin: 0 auto">
              filled - input 스타일
            </div>
            <v-autocomplete
              v-model="value"
              :items="items"
              dense
              filled
              label="Filled"
            ></v-autocomplete>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <!-- 2 -->
    <template>
      <v-toolbar dark color="teal">
        <v-toolbar-title>State selection</v-toolbar-title>
        <v-autocomplete
          v-model="select"
          :loading="loading"
          :items="items"
          :search-input.sync="search"
          cache-items
          class="mx-4"
          flat
          hide-no-data
          hide-details
          label="What state are you from?"
          solo-inverted
        ></v-autocomplete>
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>
    </template>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    items: ["foo", "bar", "fizz", "buzz"],
    values: ["foo", "bar"],
    value: null,
  }),
};
</script>
