<template>
  <v-app>
    <v-app-bar app flat clipped-right color="white">
      <v-img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFkAAAAYCAYAAACRD1FmAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAwIDc5LmRhNGE3ZTVlZiwgMjAyMi8xMS8yMi0xMzo1MDowNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjEgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjY2MEQ0RUQ4QjFCRDExRUQ5QkFCQ0IxMkNFNzMzQzkzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjY2MEQ0RUQ5QjFCRDExRUQ5QkFCQ0IxMkNFNzMzQzkzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjYwRDRFRDZCMUJEMTFFRDlCQUJDQjEyQ0U3MzNDOTMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjYwRDRFRDdCMUJEMTFFRDlCQUJDQjEyQ0U3MzNDOTMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7A2De9AAAD1ElEQVR42txZ21UbMRAFjv+jDrKpgKUCryvArgD8m5/EFdiuwPCTX0wFmAq8VBDTwVJB1EEy4lwl42G0khZiG3SOznp3tXpczdy5Ix8fvbJ8Xfwu6DKk2qfqfpfs9Yrq/MfkeJPR3yxj+CWulymNaR4zMVZFl0o0a6jdMnFeS2rbCCxezKXXEViDzi4YqDXVewcqVYtnbgFTqqOM7qcZbevMbyRQFwooDdu8lHnxPodau14Hq52yiTkLHTuLpR21GgiwlkMtReKzUPkk7o3WqJfpxt/QUQ0aqBNctD5gkKvAWstEiivFfb8TyG5AutygQzfw5H8CR30fC85cs9fzAK9ueQ+1GSR6ZZuFbzp4Qr4l00SGANhoC3znpYhY6KpDH6XW6CQC8B1uzz4YwBKQGgHPl9MMGi1jnnESoQgXzAY5Euwdlc+KqugS/Ezsm5MWGWU+MMDSkh8EB5eJ0pEHzzLwPsjJQwjtVwHsXYgL9h0UowRDq6yFg2IzFUajyDgT6i9kyVcO6NdoXFDOT9DOri10LepCSaY4KBtpfRHKeFI2i8u3xyjItIMTuly7wEcTWlO9xMRyiqec6wOnCm+ZNkUpsE0JybYmWV1ATXxBquwA+0VA30B1pJYx9bNKoRUfpfcBsqMzhRraFIZV+qpCIPciiYEFdVwBBJfrL+j3AknJqoWHR4EzD/ftvfsWfS78BOn+7A0C7XPC1AKKVBYbYYVFW2IhglvFZRwLot3Saiz+eQHg6ild+6AWzsNrUMRMAXiNnX9Amj7Fwka4mjewUpuQkYaCHgc5Fo8aIRR4f6bzAZE4j6jB15W7ZyAaeYolAK7hERXaTQKHS7uii4YFeCu9skUZ8eB3LjyjegEyQBhq56iRco8OawbwXJyxcoD9Ag3AvdpT4OOWdnkUPo8uNI5VaKZsA9kHvoWmFRPKKYCc+QMkJf1eiEkYBMS9AJwpS6tEupBxbJuTMWiRogLEZL0FDNhJ2VhY8FSxknEHj9nVwVAs9d6KUbTGtkxwiy7O4fY5APugNWa7vfLKABt3oyxo3wBrIMtj0XXGhjSijQ2BbGSGErFen2SMIMO++wHw3ge1zZ4ALl1ADljfQGRmjVQi9G2uwihCmR4H+RaZnTagwUB9uL1RFMES3uDpYwPrcG3vsLujHf5DYiLgFBFe3QIuojBkkFM1fg/yawygLRu4ZFHYATTHoZFViH4AjWyFsnAauj6wk7wiAooErk1hPEWSnn8SDkFvJf4iv9XcKZKsyGevVRBWBJMmoU3s0KqOuPejaFMoQc2yZ7XIH/w8/z7/I8AA76zFZjW35ksAAAAASUVORK5CYII="
        max-width="90"
        min-height="25"
        contain
        class="ml-auto"
      >
      </v-img>

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
            <v-card-title style="font-weight: bold">
              일정
              <v-icon>mdi-chevron-right</v-icon>
              <v-spacer></v-spacer>
              <v-icon>mdi-refresh</v-icon>
            </v-card-title>

            <v-card outlined class="ml-6" height="400px">
              <template>
                <v-col>
                  <v-date-picker
                    class="colletor-datePicker"
                    no-title
                    width="300"
                  ></v-date-picker>
                  <span class="ml-6 mr-4" style="font-weight: bold">8.4</span>
                  <span style="font-size: 14px">금요일</span>
                </v-col>
              </template>
              <v-divider width="250" style="margin: 0 auto"></v-divider>
              <div style="text-align: center" class="pt-5">
                <span style="font-weight: bold; color: #919191; font-size: 14px"
                  >일정이 없습니다.</span
                >
              </div>
            </v-card>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card flat>
            <v-card-title style="font-weight: bold"
              >공지사항
              <v-icon>mdi-chevron-right</v-icon>
              <v-spacer></v-spacer>
              <v-icon>mdi-chevron-left</v-icon>
              <h6 style="color: gray">1 / 5</h6>
              <v-icon>mdi-chevron-right</v-icon>
            </v-card-title>

            <v-card outlined>
              <v-data-table
                style="border-collapse: collapse"
                dense
                :headers="headers"
                :items="announcements"
                hide-default-header
                hide-default-footer
              >
              </v-data-table>
            </v-card>
          </v-card>
          <v-card class="mt-9" flat>
            <v-card-title style="font-weight: bold">
              전체메일
              <v-icon>mdi-chevron-right</v-icon>
              <v-spacer></v-spacer>
              <v-icon color="grey lighten-1">mdi-cog</v-icon>
              <v-icon>mdi-chevron-left</v-icon>
              <h6 style="color: gray">1 / 3</h6>
              <v-icon>mdi-chevron-right</v-icon>
            </v-card-title>

            <v-card outlined>
              <v-data-table
                dense
                :headers="mailHeaders"
                :items="mails"
                hide-default-header
                hide-default-footer
              >
              </v-data-table>
            </v-card>
          </v-card>
          <v-card class="mt-9 pb-10" flat>
            <v-card-title style="font-weight: bold">
              나의 북마크
              <v-spacer></v-spacer>
              <v-icon>mdi-plus</v-icon>
            </v-card-title>

            <v-row d-flex justfy-center>
              <v-col style="position: relative">
                <v-hover v-slot="{ hover }">
                  <v-card
                    style="z-index: 0"
                    min-height="100"
                    outlined
                    class="d-flex"
                    :class="{ 'on-hover': hover }"
                  >
                    <div>
                      <v-card-title class="pb-1 pa-3"
                        >써팀(sirTeam)</v-card-title
                      >
                      <v-card-text class="ma-0 pa-0 pl-3">
                        기업에 필요한 핵심 기능만 모아
                      </v-card-text>
                      <v-card-text class="ma-0 pa-0 pl-3">
                        https://www.sirteam.net
                      </v-card-text>
                    </div>

                    <v-img
                      src="https://www.sirteam.net/img/servin/svaimimg.png"
                      max-height="100"
                      max-width="100"
                      contain
                      class="ml-auto"
                    ></v-img>
                    <v-icon
                      v-if="hover"
                      style="position: absolute; right: 2%; top: 7%"
                      >mdi-trash-can-outline</v-icon
                    >
                  </v-card>
                </v-hover>
              </v-col>
              <v-col>
                <v-hover v-slot="{ hover }">
                  <v-card
                    min-height="100"
                    outlined
                    class="d-flex"
                    :class="{ 'on-hover': hover }"
                    style="position: relative"
                  >
                    <div>
                      <v-card-title class="pb-0 pa-3">
                        써팀(sirTeam) 헬프센터
                      </v-card-title>
                      <v-card-text class="ma-0 pa-0 pl-3"></v-card-text>
                      <v-card-text class="mt-7 pa-0 pl-3">
                        https://www.sirteam.net
                      </v-card-text>
                    </div>
                    <v-img
                      src="https://help.sirteam.net/img/shared_logo.png"
                      max-height="100"
                      max-width="100"
                      contain
                      class="ml-auto"
                    ></v-img>

                    <v-icon
                      v-if="hover"
                      style="position: absolute; right: 2%; top: 7%"
                      >mdi-trash-can-outline</v-icon
                    >
                  </v-card>
                </v-hover>
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <v-col cols="3">
          <v-card flat style="position: relative">
            <v-card-title class="pl-0" style="font-weight: bold"
              >워크플로
              <v-icon>mdi-chevron-right</v-icon>
              <v-spacer></v-spacer>
              <v-icon>mdi-plus</v-icon>
            </v-card-title>
            <v-col>
              <v-row>
                <v-hover v-slot="{ hover }">
                  <v-card
                    height="100"
                    width="310"
                    outlined
                    class="d-flex mb-2"
                    :class="{ hoverMode: hover }"
                  >
                    <v-col cols="2">
                      <v-icon x-large style="top: 25%"
                        >mdi-emoticon-wink-outline</v-icon
                      >
                    </v-col>
                    <v-col cols="8">
                      <v-card-text class="pa-1">SirTeam</v-card-text>
                      <v-card-text class="pa-1">최훈 외 23명</v-card-text>
                    </v-col>
                    <v-col cols="2">
                      <v-icon class="bins" v-if="hover"
                        >mdi-trash-can-outline</v-icon
                      >
                    </v-col>
                  </v-card>
                </v-hover>
              </v-row>
              <v-row>
                <v-hover v-slot="{ hover }">
                  <v-card
                    height="100"
                    width="310"
                    outlined
                    class="d-flex my-2"
                    :class="{ hoverMode: hover }"
                  >
                    <v-col cols="2">
                      <v-icon x-large style="top: 25%"
                        >mdi-flower-tulip-outline</v-icon
                      >
                    </v-col>
                    <v-col cols="8">
                      <v-card-text class="pa-1">DT 유니트</v-card-text>
                      <v-card-text class="pa-1">최훈 외 3명</v-card-text>
                    </v-col>
                    <v-col cols="2">
                      <v-icon class="bins" v-if="hover"
                        >mdi-trash-can-outline</v-icon
                      >
                    </v-col>
                  </v-card>
                </v-hover>
              </v-row>

              <v-row>
                <v-hover v-slot="{ hover }">
                  <v-card
                    height="100"
                    width="310"
                    outlined
                    class="d-flex my-2"
                    :class="{ hoverMode: hover }"
                  >
                    <v-col cols="2">
                      <v-icon x-large style="top: 25%"
                        >mdi-weather-cloudy</v-icon
                      >
                    </v-col>
                    <v-col cols="8">
                      <v-card-text class="pa-1">게시판</v-card-text>
                      <v-card-text class="pa-1">조은영</v-card-text>
                    </v-col>
                    <v-col cols="2">
                      <v-icon class="bins" v-if="hover"
                        >mdi-trash-can-outline</v-icon
                      >
                    </v-col>
                  </v-card>
                </v-hover>
              </v-row>
            </v-col>
          </v-card>
          <v-btn
            fab
            fixed
            elevation="8"
            style="right: 80px; bottom: 60px"
            color="accent"
            large
          >
            <v-icon color="white">mdi-chat-processing-outline</v-icon>
          </v-btn>
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
          text: "",
          align: "start",
          value: "title",
        },
        { text: "", value: "writer" },
        { text: "", value: "regDate" },
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
      mailHeaders: [
        {
          text: "",
          align: "start",
          value: "content",
        },
        { text: "", value: "writer" },
        { text: "", value: "regDate" },
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
    };
  },
};
</script>

<style scoped>
.v-card.on-hover::after {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  content: "";
  background: rgba(0, 0, 0, 0.05);
}

.v-card.hoverMode::before {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  content: "";
  background: rgba(0, 0, 0, 0.05);
}

.bins {
  opacity: 1;
}

.v-icon.hoverBins::before {
  opacity: 1;
}
</style>
