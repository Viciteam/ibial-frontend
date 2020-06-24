<template>
  <div v-show="$vuetify.breakpoint.smAndUp" class="leftSidebar">
    <v-card class="mb-3 pa-4" flat>
      <div class="d-flex">
        <h5>Team Space</h5>
      </div>
      <div class="connections px-3">
        <v-list flat dense>
          <v-list-item-group v-model="item">
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              @click="nav(item.text)"
            >
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </div>
    </v-card>

    <v-card flat class="pa-4">
      <div class="text-center">
        Your Referral Link:
      </div>
      <div class="text-center ">
        <v-row>
          <v-col class="text-right">
            <a href="#"
              ><v-icon color="blue" style="font-size:25px;"
                >mdi-checkbox-multiple-blank</v-icon
              ></a
            >
          </v-col>
          <v-col class="text-left">
            <a href="#"
              ><v-icon color="blue" style="font-size:25px;"
                >mdi-pencil</v-icon
              ></a
            >
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <a href="#"
              ><v-icon color="#4D6FA9" style="font-size:25px;"
                >mdi-facebook</v-icon
              ></a
            >
            <a href="#"
              ><v-icon color="#65BBF2" style="font-size:25px;"
                >mdi-twitter</v-icon
              ></a
            >
            <a href="#"
              ><v-icon color="#007AAA" style="font-size:25px;"
                >mdi-linkedin</v-icon
              ></a
            >
            <a href="#"
              ><v-icon color="#CB1F24" style="font-size:25px;"
                >mdi-pinterest</v-icon
              ></a
            >
            <a href="#"
              ><v-icon color="#F44336" style="font-size:25px;"
                >mdi-gmail</v-icon
              ></a
            >
          </v-col>
        </v-row>
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
      { text: 'Team Room', icon: 'mdi-account-group' }
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
