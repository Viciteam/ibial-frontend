<template>
  <v-container fill-height fluid class="pa-0">
    <v-navigation-drawer
      class="navigation__container--drawer px-0 pt-15"
      width="300px"
      fixed
      permanent
      clipped
      app
    >
      <LeftDrawer />
    </v-navigation-drawer>

    <v-card flat width="100%" class="pa-0 px-4 ma-0 room__viewport-container">
      <v-app-bar width="100%" class="room__viewport--header" floating flat>
        <v-avatar tile class="rounded-lg mr-3">
          <v-img src="https://cdn.vuetifyjs.com/images/lists/3.jpg"></v-img>
        </v-avatar>
        <div class="d-block mt-1">
          <div class="body1 font-weight-bold">Team Name</div>
          <div class="caption mt-1">
            10 members ·
            <v-btn class="accent--text text-capitalize pt-1" small text
              >Add Description</v-btn
            >
          </div>
        </div>
      </v-app-bar>
      <ChatView class="room__viewport" />

      <v-card flat class="py-5">
        <v-row no-gutters align="center">
          <v-btn icon color="accent">
            <v-icon>mdi-emoticon-happy</v-icon>
          </v-btn>
          <v-btn icon color="accent">
            <v-icon>mdi-image</v-icon>
          </v-btn>
          <v-btn icon color="accent">
            <v-icon>mdi-video</v-icon>
          </v-btn>
          <v-textarea
            append-outer-icon="mdi-send"
            clear-icon="mdi-close"
            clearable
            color="accent"
            class="ml-3 body-2"
            placeholder="Type a message"
            rows="2"
            filled
            @click:append-outer="
              ''


            "
          ></v-textarea>
        </v-row>
      </v-card>
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
.row__container--height {
  height: 100%;
}
.room__viewport-container {
  height: calc(100vh - 64px);
}
.room__viewport {
  height: calc(100vh - 249px);
  overflow-y: scroll;
  display: flex;
  flex-direction: column-reverse;
}
.navigation__container--drawer {
  overflow-y: auto !important;
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
