<template>
  <v-app>
    <template>
      <v-card>
        <v-navigation-drawer fixed dark>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                Vuetify Components
              </v-list-item-title>
              <v-list-item-subtitle> subtext </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list dense nav>
            <v-list-item v-for="item in items" :key="item.title" :to="item.to">
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-card>
    </template>
    <v-container class="mr-16">
      <router-view />
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Alerts", icon: "mdi-view-dashboard", to: "alertsEx" },
        { title: "Appbars", icon: "mdi-image", to: "appbarsEx" },
        { title: "Application", icon: "mdi-help-box", to: "applicationEx" },
        {
          title: "Aspect Ratios",
          icon: "mdi-view-dashboard",
          to: "aspectRatiosEx",
        },
        {
          title: "Auto Completes",
          icon: "mdi-view-dashboard",
          to: "autoCompletesEx",
        },

        { title: "Avatar1", icon: "mdi-view-dashboard", to: "avatarEx" },
        { title: "Avatar2", icon: "mdi-view-dashboard", to: "avatarEx2" },
        { title: "Badges", icon: "mdi-view-dashboard", to: "badgesEx" },
        { title: "Banners", icon: "mdi-view-dashboard", to: "bannersEx" },
        {
          title: "Bottom Navigation1",
          icon: "mdi-view-dashboard",
          to: "bottomNavigationEx",
        },
        {
          title: "Bottom Navigation2",
          icon: "mdi-view-dashboard",
          to: "bottomNavigationEx2",
        },
        {
          title: "Bottom Sheets",
          icon: "mdi-view-dashboard",
          to: "bottomSheetsEx",
        },
        {
          title: "Bread Crumbs",
          icon: "mdi-view-dashboard",
          to: "breadCrumbsEx",
        },
        { title: "Buttons", icon: "mdi-view-dashboard", to: "buttonsEx" },
        { title: "Calendars", icon: "mdi-view-dashboard", to: "calendarsEx" },
        { title: "Cards", icon: "mdi-view-dashboard", to: "cardsEx" },
        { title: "Carousels", icon: "mdi-view-dashboard", to: "carouselsEx" },
        {
          title: "Color Pickers",
          icon: "mdi-view-dashboard",
          to: "colorPickersEx",
        },

        { title: "Chips", icon: "mdi-view-dashboard", to: "chipsEx" },
        { title: "Checkboxes", icon: "mdi-view-dashboard", to: "checkboxesEx" },
        {
          title: "Data Iterators",
          icon: "mdi-view-dashboard",
          to: "dataIteratorsEx",
        },
        {
          title: "Data Tables",
          icon: "mdi-view-dashboard",
          to: "dataTablesEx",
        },

        {
          title: "Date Pickers",
          icon: "mdi-view-dashboard",
          to: "datePickersEx",
        },

        { title: "Dialogs", icon: "mdi-view-dashboard", to: "dialogsEx" },
        { title: "Dividers", icon: "mdi-view-dashboard", to: "dividersEx" },
        {
          title: "Expansion Panels",
          icon: "mdi-view-dashboard",
          to: "expansionPanelsEx",
        },
        { title: "Footers", icon: "mdi-view-dashboard", to: "footersEx" },
        {
          title: "File Inputs",
          icon: "mdi-view-dashboard",
          to: "fileInputsEx",
        },
        { title: "Forms", icon: "mdi-view-dashboard", to: "formsEx" },

        {
          title: "Grid System",
          icon: "mdi-view-dashboard",
          to: "gridSystemEx",
        },
        { title: "Hover", icon: "mdi-view-dashboard", to: "hoverEx" },
        { title: "Images", icon: "mdi-view-dashboard", to: "imagesEx" },
        { title: "Lists", icon: "mdi-view-dashboard", to: "listsEx" },
        { title: "Overlays", icon: "mdi-view-dashboard", to: "overlaysEx" },
        { title: "Pagination", icon: "mdi-view-dashboard", to: "paginationEx" },

        {
          title: "Radio Buttons",
          icon: "mdi-view-dashboard",
          to: "radioButtonsEx",
        },
        {
          title: "Range Sliders",
          icon: "mdi-view-dashboard",
          to: "rangeSlidersEx",
        },

        { title: "Ratings", icon: "mdi-view-dashboard", to: "ratingsEx" },
        { title: "Selects", icon: "mdi-view-dashboard", to: "selectsEx" },
        { title: "Switches", icon: "mdi-view-dashboard", to: "switchesEx" },

        { title: "Sheets", icon: "mdi-view-dashboard", to: "sheetsEx" },
        {
          title: "Simple Tables",
          icon: "mdi-view-dashboard",
          to: "simpleTablesEx",
        },

        { title: "System Bar", icon: "mdi-view-dashboard", to: "systembarEx" },
        { title: "Tabs", icon: "mdi-view-dashboard", to: "tabsEx" },
        { title: "TextAreas", icon: "mdi-view-dashboard", to: "textAreasEx" },

        { title: "Tooltips", icon: "mdi-view-dashboard", to: "tooltipsEx" },
        { title: "Treeview", icon: "mdi-view-dashboard", to: "treeviewEx" },
        {
          title: "Virtual Scroller",
          icon: "mdi-view-dashboard",
          to: "virtualScrollerEx",
        },
      ],
      right: null,
    };
  },
};
</script>
