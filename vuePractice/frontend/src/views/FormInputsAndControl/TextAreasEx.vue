<template>
  <v-app>
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="6">
          <v-textarea
            name="input-7-1"
            label="Default style"
            value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
            hint="Hint text"
          ></v-textarea>
        </v-col>
        <v-col cols="12" md="6">
          <v-textarea solo name="input-7-4" label="Solo textarea"></v-textarea>
        </v-col>
        <v-col cols="12" md="6">
          <v-textarea
            filled
            name="input-7-4"
            label="Filled textarea"
            value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
          ></v-textarea>
        </v-col>
        <v-col cols="12" md="6">
          <v-textarea
            outlined
            name="input-7-4"
            label="Outlined textarea"
            value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
          ></v-textarea>
        </v-col>
      </v-row>
    </v-container>
    <!-- 2 -->
    <template>
      <v-container>
        <v-textarea
          background-color="light-blue"
          color="black"
          label="Label"
        ></v-textarea>

        <v-textarea
          background-color="grey lighten-2"
          color="cyan"
          label="Label"
        ></v-textarea>

        <v-textarea
          background-color="amber lighten-4"
          color="orange orange-darken-4"
          label="Label"
        ></v-textarea>
      </v-container>
    </template>
    <!-- 3 -->
    <template>
      <v-container fluid>
        <v-textarea
          clearable
          clear-icon="mdi-close-circle"
          label="Text"
          value="This is clearable text."
        ></v-textarea>
      </v-container>
    </template>
    <!-- 4 -->
    <template>
      <v-container fluid>
        <v-textarea
          counter
          label="Text"
          :rules="rules"
          :value="value"
        ></v-textarea>
      </v-container>
    </template>
    <!-- 5 -->
    <template>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6">
            <v-textarea
              class="mx-2"
              label="prepend-icon"
              rows="1"
              prepend-icon="mdi-comment"
            ></v-textarea>
          </v-col>
          <v-col cols="12" sm="6">
            <v-textarea
              append-icon="mdi-comment"
              class="mx-2"
              label="append-icon"
              rows="1"
            ></v-textarea>
          </v-col>
          <v-col cols="12" sm="6">
            <v-textarea
              prepend-inner-icon="mdi-comment"
              class="mx-2"
              label="prepend-inner-icon"
              rows="1"
            ></v-textarea>
          </v-col>
          <v-col cols="12" sm="6">
            <v-textarea
              append-outer-icon="mdi-comment"
              class="mx-2"
              label="append-outer-icon"
              rows="1"
            ></v-textarea>
          </v-col>
        </v-row>
      </v-container>
    </template>
    <!-- 6 -->
    <template>
      <v-container fluid>
        <v-row>
          <v-col cols="12" sm="6">
            <v-textarea
              label="One row"
              auto-grow
              outlined
              rows="1"
              row-height="15"
            ></v-textarea>
          </v-col>
          <v-col cols="12" sm="6">
            <v-textarea
              filled
              auto-grow
              label="Two rows"
              rows="2"
              row-height="20"
            ></v-textarea>
          </v-col>
          <v-col cols="12" sm="6">
            <v-textarea
              label="Three rows"
              auto-grow
              outlined
              rows="3"
              row-height="25"
              shaped
            ></v-textarea>
          </v-col>
          <v-col cols="12" sm="6">
            <v-textarea
              filled
              auto-grow
              label="Four rows"
              rows="4"
              row-height="30"
              shaped
            ></v-textarea>
          </v-col>
        </v-row>
      </v-container>
    </template>
    <!-- 7 -->
    <template>
      <v-card class="mx-auto" style="max-width: 500px">
        <v-system-bar color="deep-purple darken-4" dark>
          <v-spacer></v-spacer>
          <v-icon small> mdi-square </v-icon>
          <v-icon class="ml-1" small> mdi-circle </v-icon>
          <v-icon class="ml-1" small> mdi-triangle </v-icon>
        </v-system-bar>
        <v-toolbar color="deep-purple accent-4" cards dark flat>
          <v-btn icon>
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
          <v-card-title class="text-h6 font-weight-regular">
            Sign up
          </v-card-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-toolbar>
        <v-form ref="form" v-model="form" class="pa-4 pt-6">
          <v-text-field
            v-model="password"
            :rules="[rules.password, rules.length(6)]"
            filled
            color="deep-purple"
            counter="6"
            label="Password"
            style="min-height: 96px"
            type="password"
          ></v-text-field>
          <v-text-field
            v-model="phone"
            filled
            color="deep-purple"
            label="Phone number"
          ></v-text-field>
          <v-text-field
            v-model="email"
            :rules="[rules.email]"
            filled
            color="deep-purple"
            label="Email address"
            type="email"
          ></v-text-field>
          <v-textarea
            v-model="bio"
            auto-grow
            filled
            color="deep-purple"
            label="Bio"
            rows="1"
          ></v-textarea>
          <v-checkbox
            v-model="agreement"
            :rules="[rules.required]"
            color="deep-purple"
          >
            <template v-slot:label>
              I agree to the&nbsp;
              <a href="#" @click.stop.prevent="dialog = true"
                >Terms of Service</a
              >
              &nbsp;and&nbsp;
              <a href="#" @click.stop.prevent="dialog = true">Privacy Policy</a
              >*
            </template>
          </v-checkbox>
        </v-form>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn text @click="$refs.form.reset()"> Clear </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            :disabled="!form"
            :loading="isLoading"
            class="white--text"
            color="deep-purple accent-4"
            depressed
          >
            Submit
          </v-btn>
        </v-card-actions>
        <v-dialog v-model="dialog" absolute max-width="400" persistent>
          <v-card>
            <v-card-title class="text-h5 grey lighten-3"> Legal </v-card-title>
            <v-card-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn text @click="(agreement = false), (dialog = false)">
                No
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn
                class="white--text"
                color="deep-purple accent-4"
                @click="(agreement = true), (dialog = false)"
              >
                Yes
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-card>
    </template>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    agreement: false,
    bio: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
    dialog: false,
    email: undefined,
    form: false,
    isLoading: false,
    password: undefined,
    phone: undefined,
    rules: {
      email: (v) => !!(v || "").match(/@/) || "Please enter a valid email",
      length: (len) => (v) =>
        (v || "").length >= len || `Invalid character length, required ${len}`,
      password: (v) =>
        !!(v || "").match(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/
        ) ||
        "Password must contain an upper case letter, a numeric character, and a special character",
      required: (v) => !!v || "This field is required",
    },
  }),
};
</script>
