<template>
  <v-card
    id="scroll-target"
    class="mx-auto overflow-hidden"
    color="#F2F5FF"
    height="100%"
  >
    <Header />

    <v-row v-scroll:#scroll-target="onScroll" class="innerBody">
      <!--LeftSidebar--->
      <v-col class="d-flex">
        <!--<v-col v-show="$vuetify.breakpoint.mdAndUp" cols="3" class="pr-0">-->
        <LeftSidebar />
        <!--</v-col>-->

        <!---Post Page-->
        <!--<v-col :cols="$vuetify.breakpoint.mdAndUp ? '5' : '12'">-->
        <PostPage />
        <!--</v-col>-->

        <!---Right Sidebar--->
        <!--<v-col v-show="$vuetify.breakpoint.mdAndUp" cols="3" class="pl-0">-->
        <RightSidebar />
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
import { Header } from '~/components/header'
import { PostPage, LeftSidebar, RightSidebar } from '~/components/community'

export default {
  components: {
    LeftSidebar,
    RightSidebar,
    PostPage,
    Header
  },
  data: () => ({
    drawer: false,
    mini: true,
    group: '',
    offsetTop: 0
  }),
  methods: {
    onScroll(e) {
      this.offsetTop = e.target.scrollTop
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
