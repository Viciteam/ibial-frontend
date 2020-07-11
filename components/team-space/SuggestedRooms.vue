<template>
  <div>
    <v-card flat class="pa-3">
      <v-row>
        <v-col class="pl-6">
          <h3>Groups</h3>
        </v-col>
        <v-col class="text-right pr-6">
          <v-btn
            small
            color="blue"
            rounded
            class="text-capitalize white--text"
            @click="dialog = true"
          >
            <v-icon left small>mdi-account-multiple</v-icon>
            Create Group
          </v-btn>
          <v-btn small outlined rounded class="text-capitalize">
            <v-icon left>mdi-check</v-icon>
            Bulk Manage Groups
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-tabs v-model="active_tab" color="blue">
            <v-tab v-for="tab of tabs" :key="tab.index" class="text-capitalize">
              {{ tab.name }}
            </v-tab>
            <v-tab-item>Group 1</v-tab-item>
            <v-tab-item>
              <v-row class="pt-3">
                <v-col cols="8" offset="2">
                  <h4>Discover More Groups</h4>
                  <p class="caption">
                    Based on your actvity and groups you interact with we
                    suggest joining these groups.
                  </p>
                  <v-row>
                    <v-col cols="5">
                      <v-card class="text-center">
                        <img src="images/backdrop.svg" width="100%" />
                        <h5>Customer Success</h5>
                        <p class="caption font-weight-light">
                          Open Group - 1 member
                        </p>
                        <v-icon color="blue">mdi-alpha-a-circle</v-icon>
                        <div class="pa-3">
                          <v-btn
                            small
                            block
                            color="blue"
                            rounded
                            class="text-capitalize lighten-3"
                          >
                            <v-icon left>mdi-check</v-icon>
                            Requested
                          </v-btn>
                        </div>
                      </v-card>
                    </v-col>
                    <v-col cols="5">
                      <v-card
                        color="blue"
                        class="white--text darken-1 pt-5 px-3"
                      >
                        <h5 class="pt-6">Create a Group</h5>
                        <p class="caption font-weight-light pb-0">
                          Not finding something you’re interested in? Start the
                          conversation by create a new Group.
                        </p>
                        <v-row>
                          <v-col class="text-right mt-0 mb-1 py-0 pr-1">
                            <v-btn
                              text
                              small
                              class="text-capitalize mt-0 white--text"
                              @click="dialog = true"
                              >Create</v-btn
                            >
                          </v-col>
                        </v-row>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-tab-item>
          </v-tabs>
        </v-col>
      </v-row>
      <v-dialog v-model="dialog" max-width="490">
        <v-card class="px-6 py-3">
          <CreateGroup />
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              small
              class="text-capitalize"
              color="blue"
              text
              @click="dialog = false"
              >Cancel</v-btn
            >
            <v-btn
              small
              color="blue"
              class="text-capitalize white--text"
              @click="dialog = false"
              >Create Group</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card>
  </div>
</template>
<script>
import { CreateGroup } from '~/components/team-space'

export default {
  components: {
    CreateGroup
  },
  data() {
    return {
      active_tab: 1,
      dialog: false,
      tabs: [
        { index: 0, name: 'Your Groups' },
        { index: 1, name: 'Suggested Groups' }
      ]
    }
  }
}
</script>
