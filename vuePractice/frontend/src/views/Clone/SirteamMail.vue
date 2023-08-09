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
  </v-app>
</template>
