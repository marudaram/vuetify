<template>
  <v-app>
    <v-card
      >divider="" 속성을 이용해서 원하는 divider를 고를 수 있다(/ \ . ; > -) /
      크게 하고 싶다면 large 속성을 넣어준다</v-card
    >
    <div>
      <v-breadcrumbs :items="items" divider="-"></v-breadcrumbs>

      <v-breadcrumbs :items="items" divider="."></v-breadcrumbs>
    </div>
    <v-card>divider로 다른 아이콘을 넣는 것도 가능하다 - v-slot 이용</v-card>
    <div>
      <v-breadcrumbs :items="items">
        <template v-slot:divider>
          <v-icon>mdi-forward</v-icon>
        </template>
      </v-breadcrumbs>

      <v-breadcrumbs :items="items">
        <template v-slot:divider>
          <v-icon>mdi-chevron-right</v-icon>
        </template>
      </v-breadcrumbs>
    </div>
    <v-card
      >item을 이용해서 각각 원하는 속성에 커스터마이징 하는 것도
      가능하다</v-card
    >
    <v-breadcrumbs :items="items">
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item :href="item.href" :disabled="item.disabled">
          {{ item.text.toUpperCase() }}
        </v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        text: "Dashboard",
        disabled: false,
        href: "breadcrumbs_dashboard",
      },
      {
        text: "Link 1",
        disabled: false,
        href: "breadcrumbs_link_1",
      },
      {
        text: "Link 2",
        disabled: true,
        href: "breadcrumbs_link_2",
      },
    ],
  }),
};
</script>
