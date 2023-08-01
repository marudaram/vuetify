<template>
  <v-app>
    <v-card>v-avatar primary</v-card>
    <v-avatar color="primary" size="69">v-avatar</v-avatar>
    <v-card>v-avatar primary / rounded - 약간 각진</v-card>
    <v-avatar color="primary" rounded size="69"></v-avatar>
    <v-card
      >v-avatar primary / rounded / tile - tile 하면 radius가 아예
      사라짐</v-card
    >
    <v-avatar color="primary" rounded tile size="69"></v-avatar>
    <v-card>color="accent" accent는 색상임</v-card>
    <v-avatar color="accent" size="69">v-avatar</v-avatar>
    <v-card
      >color="warning lighten-2" warning은 색상, lighten은 1부터 5까지 스펙트럼
      존재 / 숫자가 커질수록 색이 옅어진다(light)
    </v-card>
    <v-avatar color="warning lighten-2" rounded size="69"></v-avatar>
    <v-card>color="teal" teal 색상</v-card>
    <v-avatar color="teal" rounded size="69"></v-avatar>
    <v-card>size="" 으로 원하는 사이즈로 조정할 수 있다</v-card>
    <v-avatar color="grey lighten-2" rounded size="55">55</v-avatar>
    <v-card>v-icon / mdi-account-circle 이용해서 아이콘 넣을 수 있음</v-card>
    <v-row justify="space-around">
      <v-avatar color="indigo">
        <v-icon dark> mdi-account-circle </v-icon>
      </v-avatar>
      <v-avatar>
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
      </v-avatar>
      <v-avatar color="red">
        <span class="white--text text-h5">CJ</span>
      </v-avatar>
    </v-row>
    <v-card
      >Advanced Usage / v-container fluid: 전체 너비를 이용하고자 할 경우 /
      v-row justify="center": 가운데정렬 / v-expansion-panels popout: 확장형
      카테고리같은 요소, popout은 클릭했을 때의 효과로, 다양한 효과가 존재 /
      v-expansion-panels이 겉표지같은 느낌이면 그 속에 v-expansion-panel이 있다
      / 그 안에서 v-expansion-panel-header & v-expansion-panel-content 로 구분할
      수 있다 / v-row에는 기본적으로 상하로 margin이 잡혀있는데, no-gutters를
      적용하면 이를 초기화할 수 있다.
    </v-card>
    <v-container fluid>
      <v-row justify="center">
        <v-subheader>v-subheader 요소</v-subheader>

        <v-expansion-panels popout>
          <v-expansion-panel
            v-for="(message, i) in messages"
            :key="i"
            hide-actions
          >
            <v-expansion-panel-header>
              <v-row align="center" class="spacer" no-gutters>
                <v-col cols="4" sm="2" md="1">
                  <v-avatar size="36px">
                    <img
                      v-if="message.avatar"
                      alt="Avatar"
                      src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                    />
                    <v-icon
                      v-else
                      :color="message.color"
                      v-text="message.icon"
                    ></v-icon>
                  </v-avatar>
                </v-col>

                <v-col class="hidden-xs-only" sm="5" md="3">
                  <strong v-html="message.name"></strong>
                  <span v-if="message.total" class="grey--text">
                    &nbsp;({{ message.total }})
                  </span>
                </v-col>

                <v-col class="text-no-wrap" cols="5" sm="3">
                  <v-chip
                    v-if="message.new"
                    :color="`${message.color} lighten-4`"
                    class="ml-0 mr-2 black--text"
                    label
                    small
                  >
                    {{ message.new }} new
                  </v-chip>
                  <strong v-html="message.title"></strong>
                </v-col>

                <v-col
                  v-if="message.excerpt"
                  class="grey--text text-truncate hidden-sm-and-down"
                >
                  &mdash;
                  {{ message.excerpt }}
                </v-col>
              </v-row>
            </v-expansion-panel-header>

            <v-expansion-panel-content>
              <v-divider></v-divider>
              <v-card-text v-text="lorem"></v-card-text>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    messages: [
      {
        avatar: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460",
        name: "John Leider",
        title: "Welcome to Vuetify!",
        excerpt: "Thank you for joining our community...",
      },
      {
        color: "red",
        icon: "mdi-account-multiple",
        name: "Social",
        new: 1,
        total: 3,
        title: "Twitter",
      },
      {
        color: "teal",
        icon: "mdi-tag",
        name: "Promos",
        new: 2,
        total: 4,
        title: "Shop your way",
        exceprt: "New deals available, Join Today",
      },
    ],
    lorem:
      "Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum.",
  }),
};
</script>
