<template>
  <v-card
    id="scroll-target"
    class="mx-auto overflow-hidden"
    color="#F2F5FF"
    height="100%"
    flat
  >
    <Header />

    <v-row class="innerBody">
      <!--LeftSidebar--->
      <v-col class="d-flex">
        <!--<v-col v-show="$vuetify.breakpoint.mdAndUp">-->
        <div absolute>
          <Sidebar @navSidebar="NavText" />
        </div>
        <!--</v-col>-->

        <!---Post Page-->
        <!--<v-col :cols="$vuetify.breakpoint.mdAndUp ? '5' : '12'">-->
        <div v-if="toggleSidebar == 'Newsfeed'">
          <Newsfeed />
        </div>
        <div v-else-if="toggleSidebar == 'Team Rooms'">
          <TeamRoom />
        </div>
        <div v-else-if="toggleSidebar == 'Suggested Rooms'" class="wide_space">
          <SuggestedRooms />
        </div>
        <div v-else-if="toggleSidebar == 'Create Group'">
          <CreateGroup />
        </div>
        <div v-else-if="toggleSidebar == 'works'">
          <TeamSpaceWorks />
        </div>
        <div v-else-if="toggleSidebar == 'projects'">
          <TeamSpaceProjects />
        </div>
      </v-col>
      <v-btn fab color="blue" class="floating_msg" fixed>
        <v-icon color="white">mdi-comment</v-icon>
      </v-btn>
    </v-row>
  </v-card>
</template>
<script>
import {
  Sidebar,
  Newsfeed,
  TeamRoom,
  TeamSpaceWorks,
  TeamSpaceProjects,
  SuggestedRooms,
  CreateGroup
} from '~/components/team-space'
import Header from '~/components/Header.vue'

export default {
  components: {
    Sidebar,
    Newsfeed,
    TeamRoom,
    TeamSpaceWorks,
    TeamSpaceProjects,
    SuggestedRooms,
    CreateGroup,
    Header
  },
  data: () => ({
    drawer: false,
    mini: true,
    group: '',
    offsetTop: 0,
    toggleSidebar: 'Newsfeed'
  }),
  methods: {
    NavText(value) {
      this.toggleSidebar = value
    }
  }
}
</script>

<style scoped>
.innerBody {
  margin: 0 auto;
  max-width: 1100px;
  margin-top: 65px;
}
.floating_msg {
  right: 20px;
  bottom: 20px;
}
.wide_space {
  width: 100%;
}
</style>
