<template>
  <div class="TeamRoomPage">
    <v-card class="mb-3" flat>
      <img src="images/backdrop.svg" width="100%" />
      <v-row>
        <v-col cols="1">
          <img src="images/icons/html.svg" class="ml-3 pt-2" />
        </v-col>
        <v-col cols="11">
          <v-card-title class="pa-0">
            General Room
          </v-card-title>
          <v-card-subtitle class="py-3 px-0">
            8 members:
            <span
              >This is your first group. It’s a great place to share things like
              important... <a href="#" class="blue--text">more</a></span
            >
          </v-card-subtitle>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row>
        <v-col cols="5" class="pl-6">
          <v-btn
            v-for="item in tabs"
            :key="item.name"
            tile
            text
            class="text-capitalize"
            :class="item.active == true ? 'active' : ''"
            >{{ item.name }}</v-btn
          >
        </v-col>
        <v-col cols="7" class="pl-0">
          <v-btn small outlined rounded class="text-capitalize">
            <v-icon left>mdi-check</v-icon>
            Subscribed
          </v-btn>
          <v-btn small outlined rounded>
            <v-icon small>mdi-phone</v-icon>
          </v-btn>
          <v-btn small outlined rounded>
            <v-icon small>mdi-video</v-icon>
          </v-btn>
          <v-btn small outlined rounded>
            <v-icon small>mdi-magnify</v-icon>
          </v-btn>
          <v-btn small outlined rounded>
            <v-icon small>mdi-dots-horizontal</v-icon>
          </v-btn>
          <v-btn small color="blue" rounded class="text-capitalize white--text">
            <v-icon left small>mdi-account-plus</v-icon>
            Add People
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
    <v-row>
      <v-col cols="8">
        <PostPage />
      </v-col>
      <v-col cols="4" class="pl-0">
        <TeamRoomRightSidebar />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { PostPage } from '~/components/community'
import { TeamRoomRightSidebar } from '~/components/team-space'

export default {
  components: {
    PostPage,
    TeamRoomRightSidebar
  },
  data() {
    return {
      tabs: [
        {
          name: 'Post',
          link: '#',
          active: true
        },
        {
          name: 'Chat',
          link: '#',
          active: false
        },
        {
          name: 'Files',
          link: '#',
          active: false
        },
        {
          name: 'More',
          link: '#',
          active: false
        }
      ]
    }
  }
}
</script>
<style>
.TeamRoomPage {
  width: 800px;
}
</style>
