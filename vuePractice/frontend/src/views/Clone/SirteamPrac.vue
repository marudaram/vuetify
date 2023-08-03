<template>
  <v-app>
    <v-app-bar app flat clipped-right>
      sirteam
      <v-row justify="space-around">
        <v-spacer></v-spacer>

        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn fab icon v-bind="attrs" v-on="on">
              <v-icon color="blue">mdi-help-circle-outline</v-icon>
            </v-btn>
          </template>
          <span>도움말</span>
        </v-tooltip>

        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn fab icon v-bind="attrs" v-on="on">
              <v-icon>mdi-bullhorn-variant-outline</v-icon>
            </v-btn>
          </template>
          <span>업데이트</span>
        </v-tooltip>

        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn fab icon v-bind="attrs" v-on="on">
              <v-icon>mdi-apps</v-icon>
            </v-btn>
          </template>
          <span>앱</span>
        </v-tooltip>

        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn fab icon v-bind="attrs" v-on="on">
              <v-icon>mdi-account-circle</v-icon>
            </v-btn>
          </template>
          <span>사용자 정보</span>
        </v-tooltip>
      </v-row>
    </v-app-bar>

    <v-navigation-drawer
      app
      right
      clipped
      :width="70"
      justify="center"
      align="center"
    >
      <v-tooltip left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn depressed v-bind="attrs" v-on="on" class="my-3">
            <v-icon color="deep-purple accent-3"
              >mdi-view-dashboard-outline</v-icon
            >
          </v-btn>
        </template>
        <span>대시보드</span>
      </v-tooltip>

      <v-tooltip left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn depressed v-bind="attrs" v-on="on" class="my-3">
            <v-icon color="deep-purple accent-3">mdi-email-open-outline</v-icon>
          </v-btn>
        </template>
        <span>메일</span>
      </v-tooltip>

      <v-tooltip left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn depressed v-bind="attrs" v-on="on" class="my-3">
            <v-icon color="deep-purple accent-3">mdi-calendar-check </v-icon>
          </v-btn>
        </template>
        <span>캘린더</span>
      </v-tooltip>

      <v-tooltip left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn depressed v-bind="attrs" v-on="on" class="my-3">
            <v-icon color="deep-purple accent-3"
              >mdi-book-account-outline
            </v-icon>
          </v-btn>
        </template>
        <span>주소록</span>
      </v-tooltip>

      <v-tooltip left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn depressed v-bind="attrs" v-on="on" class="my-3">
            <v-icon color="deep-purple accent-3">mdi-folder-outline</v-icon>
          </v-btn>
        </template>
        <span>드라이브</span>
      </v-tooltip>

      <v-tooltip left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn depressed v-bind="attrs" v-on="on" class="my-3">
            <v-icon color="deep-purple accent-3">mdi-list-box-outline</v-icon>
          </v-btn>
        </template>
        <span>게시판</span>
      </v-tooltip>

      <v-tooltip left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn depressed v-bind="attrs" v-on="on" class="my-3">
            <v-icon color="deep-purple accent-3">mdi-sitemap-outline</v-icon>
          </v-btn>
        </template>
        <span>워크플로</span>
      </v-tooltip>
    </v-navigation-drawer>

    <v-main>
      <v-row>
        <v-col cols="3">
          <v-card flat>
            <v-card-title
              >일정
              <v-icon>mdi-chevron-right</v-icon>
              <v-spacer></v-spacer>
              <v-icon>mdi-refresh</v-icon>
            </v-card-title>

            <v-card flat>
              <template>
                <v-date-picker
                  class="colletor-datePicker"
                  no-title
                  width="330"
                ></v-date-picker>
              </template>
            </v-card>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card flat>
            <v-card-title
              >공지사항
              <v-icon>mdi-chevron-right</v-icon>
              <v-spacer></v-spacer>
              <v-icon>mdi-chevron-left</v-icon>
              <h6 style="color: gray">1 / 5</h6>
              <v-icon>mdi-chevron-right</v-icon>
            </v-card-title>

            <v-card flat>
              <v-data-table
                :headers="headers"
                :items="announcements"
                hide-default-header
                hide-default-footer
              >
              </v-data-table>
            </v-card>
          </v-card>
          <v-card flat>
            <v-card-title>
              전체메일
              <v-icon>mdi-chevron-right</v-icon>
              <v-spacer></v-spacer>
              <v-icon color="grey lighten-1">mdi-cog</v-icon>
              <v-icon>mdi-chevron-left</v-icon>
              <h6 style="color: gray">1 / 3</h6>
              <v-icon>mdi-chevron-right</v-icon>
            </v-card-title>

            <v-card flat>
              <v-simple-table class="pa-4" height="200">
                <tr v-for="item in mails" :key="item.content">
                  <td style="width: 60%" class="py-1">
                    {{ item.content }}
                  </td>
                  <td style="width: 20%">{{ item.writer }}</td>

                  <td style="width: 20%; color: gray">
                    {{ item.regDate }}
                  </td>
                </tr>
              </v-simple-table>
            </v-card>
          </v-card>
          <v-card flat>
            <v-card-title>
              나의 북마크
              <v-spacer></v-spacer>
              <v-icon>mdi-plus</v-icon>
            </v-card-title>

            <v-row>
              <v-col>
                <v-card flat>
                  <v-card-title>써팀(sirTeam)</v-card-title>
                </v-card>
              </v-col>
              <v-col></v-col>
            </v-row>
          </v-card>
        </v-col>

        <v-col cols="3">
          <v-card flat>
            <v-card-title>워크플로</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-main>
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
          value: "title",
        },
        { text: "Calories", value: "calories" },
        { text: "Fat (g)", value: "fat" },
      ],
      announcements: [
        {
          title: "[People&Culture] 23년 7월 신규입사자 소개(2차)",
          writer: "정선영",
          regDate: "2023.07.17(월)",
        },
        {
          title: "[People&Culture] 23년 7월 신규입사자 소개(1차)",
          writer: "정선영",
          regDate: "2023.07.17(월)",
        },
        {
          title: "[공지] 조직개편 및 승진급 명단(23년 6월 기준)",
          writer: "정선영",
          regDate: "2023.07.17(월)",
        },
        {
          title: "[퇴직연금] 사전지정운용제도(디폴트옵션) 안내",
          writer: "유진희",
          regDate: "2023.07.17(월)",
        },
        {
          title: "[People&Culture] 23년 6월 신규입사자 소개(3차)",
          writer: "정선영",
          regDate: "2023.07.17(월)",
        },
      ],
      mails: [
        {
          content: "[AR] v4.4.1 릴리즈 공유",
          writer: "이바다",
          regDate: "2023.07.24 10.05",
        },
        {
          content: "[SB] v7.1.8 릴리즈 공유",
          writer: "김용건",
          regDate: "2023.07.24 10.05",
        },
        {
          content: "JetBrains 도구로 더 스마트하게 개발하세요",
          writer: "JetBrains",
          regDate: "2023.07.24 10.05",
        },
        {
          content: "JetBrains 도구로 더 스마트하게 개발하세요",
          writer: "JetBrains",
          regDate: "2023.07.24 10.05",
        },
        {
          content: "JetBrains 도구로 더 스마트하게 개발하세요",
          writer: "JetBrains",
          regDate: "2023.07.24 10.05",
        },
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

<style scoped></style>
