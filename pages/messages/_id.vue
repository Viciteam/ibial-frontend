<template>
  <v-container fill-height fluid class="messenger__container pa-0">
    <v-navigation-drawer
      class="navigation__container--drawer px-0 pt-16 elevation-1"
      width="400px"
      fixed
      permanent
      clipped
      app
    >
      <LeftDrawer />
    </v-navigation-drawer>

    <v-card
      flat
      color="white"
      width="100%"
      class="pa-0 ma-0 room__viewport-container"
    >
      <ChatView />
    </v-card>

    <v-navigation-drawer
      class="navigation__container--drawer px-0 elevation-1"
      width="400px"
      fixed
      permanent
      clipped
      right
      app
    >
      <RoomDetails />
    </v-navigation-drawer>
  </v-container>
</template>

<script>
import { LeftDrawer } from '~/components/messages'
import { RoomDetails } from '~/components/messages/right-drawer'
import { ChatView } from '~/components/messages/middle'

export default {
  layout: 'room',
  components: {
    LeftDrawer: LeftDrawer,
    ChatView: ChatView,
    RoomDetails: RoomDetails
  }
}
</script>

<style scoped>
.room__viewport-container {
  height: calc(100vh - 64px);
}
.navigation__container--drawer {
  overflow-y: auto !important;
}
.messenger__container {
  background: transparent !important;
}
</style>
<style>
.navigation__container--drawer
  .v-navigation-drawer__content::-webkit-scrollbar {
  width: 5px;
}

.navigation__container--drawer
  .v-navigation-drawer__content::-webkit-scrollbar-track {
  background-color: transparent;
}

.navigation__container--drawer
  .v-navigation-drawer__content::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
  border-radius: 10px !important;
}
</style>
