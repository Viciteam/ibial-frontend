<template>
  <div v-show="$vuetify.breakpoint.smAndUp" class="leftSidebar">
    <v-card class="mb-3 pl-3 py-3" flat>
      <div class="d-flex">
        <h5>Team Space</h5>
      </div>
      <div class="px-0">
        <v-list flat dense>
          <v-list-item-group v-model="item">
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              @click="nav(item.text)"
            >
              <v-list-item-icon class="mr-3">
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-group class="mr-3">
              <v-icon slot="prependIcon">mdi-file-tree</v-icon>
              <template v-slot:activator>
                <v-list-item-title class="ml-n5 px-0"
                  >Projects & Tasks</v-list-item-title
                >
              </template>
              <v-list-item>
                <v-list-item-icon class="mr-3">
                  <v-icon>mdi-work</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Works</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon class="mr-3">
                  <v-icon>mdi-work</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Projects</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
          </v-list-item-group>
        </v-list>
      </div>
    </v-card>

    <v-card flat class="pa-4">
      <div class="text-center">
        Your Referral Link:
      </div>
      <div class="text-center ">
        <v-row>
          <v-col class="text-right">
            <a href="#"
              ><v-icon color="blue" style="font-size:25px;"
                >mdi-checkbox-multiple-blank</v-icon
              ></a
            >
          </v-col>
          <v-col class="text-left">
            <a href="#"
              ><v-icon color="blue" style="font-size:25px;"
                >mdi-pencil</v-icon
              ></a
            >
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <a href="#"
              ><v-icon color="#4D6FA9" style="font-size:25px;"
                >mdi-facebook</v-icon
              ></a
            >
            <a href="#"
              ><v-icon color="#65BBF2" style="font-size:25px;"
                >mdi-twitter</v-icon
              ></a
            >
            <a href="#"
              ><v-icon color="#007AAA" style="font-size:25px;"
                >mdi-linkedin</v-icon
              ></a
            >
            <a href="#"
              ><v-icon color="#CB1F24" style="font-size:25px;"
                >mdi-pinterest</v-icon
              ></a
            >
            <a href="#"
              ><v-icon color="#F44336" style="font-size:25px;"
                >mdi-gmail</v-icon
              ></a
            >
          </v-col>
        </v-row>
      </div>
    </v-card>
  </div>
</template>
<script>
export default {
  data: () => ({
    item: 1,
    items: [
      { text: 'Newsfeed', icon: 'mdi-newspaper' },
      { text: 'Team Rooms', icon: 'mdi-account-group' }
    ]
  }),
  methods: {
    nav(item) {
      this.$emit('navSidebar', item)
    }
  }
}
</script>
<style scoped>
.leftSidebar {
  width: 260px;
  margin-right: 12px;
}
.sidebar_ellipses {
  position: absolute;
  right: 15px;
  top: 6px;
}
</style>
<style>
.v-application--is-ltr .v-list-item__action:last-of-type:not(:only-child),
.v-application--is-ltr .v-list-item__avatar:last-of-type:not(:only-child),
.v-application--is-ltr .v-list-item__icon:last-of-type:not(:only-child) {
  margin-left: 0px;
}
</style>
