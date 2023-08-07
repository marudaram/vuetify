<template>
  <v-app>
    기본 data table 형태 / :items-per-page 속성으로 한 페이지에 얼마나 많은 양의
    데이터를 나타낼지 설정할 수 있음
    <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>

    <!-- 2 -->
    loading 속성을 넣어주고 loading-text 속성으로 글을 적어놓을 수 있음
    <template>
      <v-data-table
        item-key="name"
        class="elevation-1"
        loading
        loading-text="로딩중입니다. 잠시 기다려주세요"
      ></v-data-table>
    </template>

    *dense - 좀더 촘촘하게 표현 <br />
    *custom-filter - 필터를 커스터마이징해서 선언할 수 있음 / 해당 메서드는 따로
    아래에서 선언 <br />
    *filterable=false를 주면 해당 칼럼은 필터를 적용할 수 없음
    <br />
    *group-by 속성을 이용해서 그룹핑하는 것도 가능
    <br />
    *hide-default-header / hide-default-footer를 사용하여 헤더와 푸터를 숨기는
    것도 가능
    <br />
    *multi-sort 속성을 이용하면 다중 소팅도 가능하다
    <br />
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "Dessert (100g serving)",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Calories", value: "calories" },
        { text: "Fat (g)", value: "fat" },
        { text: "Carbs (g)", value: "carbs" },
        { text: "Protein (g)", value: "protein" },
        { text: "Iron (%)", value: "iron" },
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: 1,
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: 1,
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: 7,
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: 8,
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: 16,
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: 0,
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: 2,
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: 45,
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: 22,
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: 6,
        },
      ],
    };
  },
};
</script>
