<template>
  <v-app>
    <div>
      <v-system-bar dark color="primary">
        <v-spacer></v-spacer>
        <v-icon>mdi-wifi-strength-4</v-icon>
        <v-icon>mdi-signal-cellular-outline</v-icon>
        <v-icon>mdi-battery</v-icon>
        <span>12:30</span>
      </v-system-bar>
      <br />
      <v-system-bar dark color="red lighten-2">
        <v-spacer></v-spacer>
        <v-icon>mdi-wifi-strength-4</v-icon>
        <v-icon>mdi-signal-cellular-outline</v-icon>
        <v-icon>mdi-battery</v-icon>
        <span>12:30</span>
      </v-system-bar>
      <br />
      <v-system-bar dark color="indigo darken-2">
        <v-spacer></v-spacer>
        <v-icon>mdi-wifi-strength-4</v-icon>
        <v-icon>mdi-signal-cellular-outline</v-icon>
        <v-icon>mdi-battery</v-icon>
        <span>12:30</span>
      </v-system-bar>
    </div>
    <div>
      <v-subheader>Lights out (light)</v-subheader>
      <v-card
        img="https://cdn.vuetifyjs.com/images/home/vuetify_layout2.svg"
        height="200px"
      >
        <v-system-bar color="primary" lights-out>
          <v-spacer></v-spacer>
          <v-icon>mdi-wifi-strength-4</v-icon>
          <v-icon>mdi-signal-cellular-outline</v-icon>
          <v-icon>mdi-battery</v-icon>
          <span>12:30</span>
        </v-system-bar>
      </v-card>
      <v-subheader>Lights out (dark)</v-subheader>
      <v-card
        img="https://cdn.vuetifyjs.com/images/home/vuetify_layout2.svg"
        height="200px"
      >
        <v-system-bar color="primary" lights-out dark>
          <v-spacer></v-spacer>
          <v-icon>mdi-wifi-strength-4</v-icon>
          <v-icon>mdi-signal-cellular-outline</v-icon>
          <v-icon>mdi-battery</v-icon>
          <span>12:30</span>
        </v-system-bar>
      </v-card>
    </div>
    <div>
      <v-subheader>Light status bar</v-subheader>
      <v-card
        img="https://cdn.vuetifyjs.com/images/home/vuetify_layout1.svg"
        height="200px"
      >
        <v-system-bar color="primary">
          <v-spacer></v-spacer>
          <v-icon>mdi-wifi-strength-4</v-icon>
          <v-icon>mdi-signal-cellular-outline</v-icon>
          <v-icon>mdi-battery</v-icon>
          <span>12:30</span>
        </v-system-bar>
      </v-card>
      <v-subheader>Dark status bar</v-subheader>
      <v-card
        img="https://cdn.vuetifyjs.com/images/home/vuetify_layout1.svg"
        height="200px"
      >
        <v-system-bar color="primary" dark>
          <v-spacer></v-spacer>
          <v-icon>mdi-wifi-strength-4</v-icon>
          <v-icon>mdi-signal-cellular-outline</v-icon>
          <v-icon>mdi-battery</v-icon>
          <span>12:30</span>
        </v-system-bar>
      </v-card>
    </div>
    <div>
      <v-system-bar window dark>
        <v-icon>mdi-message</v-icon>
        <span>10 unread messages</span>
        <v-spacer></v-spacer>
        <v-icon>mdi-minus</v-icon>
        <v-icon>mdi-checkbox-blank-outline</v-icon>
        <v-icon>mdi-close</v-icon>
      </v-system-bar>
    </div>
  </v-app>
</template>
