<template>
  <v-container fill-height fluid class="pa-0">
    <v-navigation-drawer
      class="navigation__container--drawer px-0"
      width="300px"
      fixed
      permanent
      clipped
      app
    >
      <LeftDrawer />
    </v-navigation-drawer>

    <v-card flat width="100%" class="pa-0 ma-0 room__viewport">
      <v-app-bar flat floating dense>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Page title</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-app-bar>
    </v-card>

    <v-navigation-drawer
      class="navigation__container--drawer px-0"
      width="300px"
      fixed
      permanent
      clipped
      right
      app
    >
      <GroupDetails />
    </v-navigation-drawer>
  </v-container>
</template>

<script>
import { LeftDrawer } from '~/components/messages'
import { GroupDetails } from '~/components/messages/right-drawer'

export default {
  layout: 'room',
  components: {
    LeftDrawer: LeftDrawer,
    GroupDetails: GroupDetails
  }
}
</script>

<style scoped>
.row__container--height {
  height: 100%;
}
.room__viewport {
  height: calc(124vh - 162px);
}
</style>
<style>
.navigation__container--drawer
  .v-navigation-drawer__content::-webkit-scrollbar {
  width: 3px;
}

.navigation__container--drawer
  .v-navigation-drawer__content::-webkit-scrollbar-track {
  background-color: #f9f9f9;
}

.navigation__container--drawer
  .v-navigation-drawer__content::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}
</style>
