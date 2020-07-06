<template>
  <div v-show="$vuetify.breakpoint.smAndUp" class="leftSidebar">
    <v-card class="mb-3 pl-3 py-3" flat>
      <div class="d-flex">
        <h5>Team Space</h5>
      </div>
      <div class="px-0">
        <v-list flat dense>
          <v-list-item-group v-model="item">
            <v-list-item @click="nav('Newsfeed')">
              <v-list-item-icon class="mr-3">
                <v-icon>mdi-newspaper</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Newsfeed</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-group class="mr-3">
              <v-icon slot="prependIcon">mdi-account-group</v-icon>
              <template v-slot:activator>
                <v-list-item-title class="ml-n5 px-0"
                  >Team Rooms</v-list-item-title
                >
              </template>
              <v-list-item @click="nav('Team Rooms')">
                <v-list-item-icon>
                  <v-icon>mdi-work</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>General Room</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item @click="nav('Suggested Rooms')">
                <v-list-item-icon>
                  <v-icon>mdi-work</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Suggested Rooms</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
            <v-list-group class="mr-3">
              <v-icon slot="prependIcon">mdi-file-tree</v-icon>
              <template v-slot:activator>
                <v-list-item-title class="ml-n5 px-0"
                  >Projects & Tasks</v-list-item-title
                >
              </template>
              <v-list-item @click="nav('works')">
                <v-list-item-icon>
                  <v-icon>mdi-work</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>My Work</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item @click="nav('projects')">
                <v-list-item-icon>
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
