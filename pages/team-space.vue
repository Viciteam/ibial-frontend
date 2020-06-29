<template>
  <v-card
    id="scroll-target"
    class="mx-auto overflow-hidden"
    color="#F2F5FF"
    height="100%"
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
        <div v-else>
          <TeamRoom />
        </div>
      </v-col>
      <v-btn fab color="blue" class="floating_msg" fixed>
        <v-icon color="white">mdi-comment</v-icon>
      </v-btn>
    </v-row>
  </v-card>
</template>
<script>
import { Sidebar, Newsfeed, TeamRoom } from '~/components/team-space'
import Header from '~/components/Header.vue'

export default {
  components: {
    Sidebar,
    Newsfeed,
    TeamRoom,
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
}
.floating_msg {
  right: 20px;
  bottom: 20px;
}
</style>
