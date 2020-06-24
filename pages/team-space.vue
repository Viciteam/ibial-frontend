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
        <Sidebar @navSidebar="NavText" />
        <!--</v-col>-->

        <!---Post Page-->
        <!--<v-col :cols="$vuetify.breakpoint.mdAndUp ? '5' : '12'">-->
        <div v-if="toggleSidebar == 'Newsfeed'">
          <Newsfeed />
        </div>
        <div v-else>
          <PostPage />
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
import Sidebar from '~/components/team-space/Sidebar.vue'
import Newsfeed from '~/components/team-space/Newsfeed.vue'
//import RightSidebar from '~/components/RightSidebar.vue'
import PostPage from '~/components/PostPage.vue'
import Header from '~/components/Header.vue'

export default {
  components: {
    Sidebar,
    Newsfeed,
    PostPage,
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
</style>
