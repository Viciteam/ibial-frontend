<template>
  <v-card
    id="scroll-target"
    class="mx-auto overflow-hidden"
    color="#F2F5FF"
    height="100%"
  >
    <v-app-bar flat app>
      <v-app-bar-nav-icon @click.stop="mini = !mini"></v-app-bar-nav-icon>
      <v-img
        :class="$vuetify.breakpoint.xsOnly ? 'mx-1' : 'mx-6'"
        :src="
          $vuetify.breakpoint.xsOnly
            ? 'images/ibial-icon.png'
            : 'images/logo-ibial.png'
        "
        :max-width="$vuetify.breakpoint.xsOnly ? '30' : '60'"
        contain
      ></v-img>
      <v-text-field
        v-show="$vuetify.breakpoint.mdAndUp"
        prepend-inner-icon="search"
        label="Search"
        rounded
        background-color="#eeeeee"
        hide-details
        single-line
        flat
      ></v-text-field>
      <v-spacer></v-spacer>

      <v-btn icon>
        <img src="images/newsfeed.svg" width="20px" />
      </v-btn>
      <span v-show="$vuetify.breakpoint.mdAndUp">News Feed</span>
      <v-btn icon>
        <v-icon>mdi-store</v-icon>
      </v-btn>
      <span v-show="$vuetify.breakpoint.mdAndUp">Marketplace</span>
      <v-btn icon>
        <v-icon>mdi-account-supervisor-circle</v-icon>
      </v-btn>
      <span v-show="$vuetify.breakpoint.mdAndUp">Team Space</span>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-cart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-comment</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-show="$vuetify.breakpoint.mdAndUp"
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
      fixed
      style="margin-top:60px; padding-top:60px;"
    >
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <img src="images/sales.svg" width="100%" />
            </v-list-item-icon>
            <v-list-item-title>Sales</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <img src="images/referal.svg" width="100%" />
            </v-list-item-icon>
            <v-list-item-title>Referals</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <img src="images/purchases.svg" width="100%" />
            </v-list-item-icon>
            <v-list-item-title>Purchases</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <img src="images/wallet.svg" width="100%" />
            </v-list-item-icon>
            <v-list-item-title>Wallet</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <img src="images/messages.svg" width="100%" />
            </v-list-item-icon>
            <v-list-item-title>Messages</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <img src="images/connections.svg" width="100%" />
            </v-list-item-icon>
            <v-list-item-title>Connections</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <img src="images/communities.svg" width="100%" />
            </v-list-item-icon>
            <v-list-item-title>Communities</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <img src="images/apps.svg" width="100%" />
            </v-list-item-icon>
            <v-list-item-title>Apps</v-list-item-title>
          </v-list-item>

          <v-spacer></v-spacer>
          <v-list-item style="margin-top:40px;">
            <v-list-item-icon>
              <img src="images/settings.svg" width="100%" />
            </v-list-item-icon>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-row v-scroll:#scroll-target="onScroll" class="innerBody">
      <!--LeftSidebar--->
      <v-col class="d-flex">
        <!--<v-col v-show="$vuetify.breakpoint.mdAndUp">-->
        <LeftSidebar />
        <!--</v-col>-->

        <!---Post Page-->
        <!--<v-col :cols="$vuetify.breakpoint.mdAndUp ? '5' : '12'">-->
        <PostPage />
        <!--</v-col>-->

        <!---Right Sidebar--->
        <!--<v-col v-show="$vuetify.breakpoint.mdAndUp">-->
        <RightSidebar />
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
import LeftSidebar from '~/components/LeftSidebar.vue'
import RightSidebar from '~/components/RightSidebar.vue'
import PostPage from '~/components/PostPage.vue'

export default {
  components: {
    LeftSidebar,
    RightSidebar,
    PostPage
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
      console.log('ScrollTop-' + this.offsetTop)
    }
  }
}
</script>

<style>
.theme--light.v-app-bar.v-toolbar.v-sheet {
  background-color: #ffffff;
  overflow-x: auto;
}
.v-navigation-drawer__border {
  display: none;
}
.innerBody {
  margin: 0 auto;
  max-width: 1100px;
}
a {
  text-decoration: none;
}
.v-text-field__details {
  display: none;
}
</style>
