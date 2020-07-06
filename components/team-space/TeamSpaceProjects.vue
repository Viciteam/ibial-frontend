<template>
  <div>
    <v-card flat width="800" class="pa-6">
      <v-row>
        <v-col class="py-0" cols="4">
          <h5>Active Projects</h5>
        </v-col>
        <v-col class="text-right py-0" cols="8">
          <v-btn small color="green white--text text-capitalize">
            <v-icon left>mdi-plus</v-icon>
            Add Project
          </v-btn>
          <v-btn small text class="text-capitalize">
            Grid
            <v-icon right>mdi-chevron-down</v-icon>
          </v-btn>
          <v-btn small icon>
            <v-icon>mdi-filter-variant</v-icon>
          </v-btn>
          <v-btn small icon>
            <v-icon>mdi-dots-horizontal</v-icon>
          </v-btn>
          <v-btn small class="text-capitalize" text>
            <v-icon left>mdi-folder-outline</v-icon>
            Categories
          </v-btn>
        </v-col>
      </v-row>
      <div>
        <v-row>
          <v-col cols="2" class="text-center">
            <v-icon large>mdi-account-multiple</v-icon>
          </v-col>
          <v-col class="caption" cols="8">
            <p class="text-truncate mb-0 font-weight-bold">
              Why not invite people?
            </p>
            <p class="text-truncate mb-0">
              Invite users to your site to assign them to tasks and start
              collaborating today!
            </p>
          </v-col>
          <v-col cols="2">
            <v-btn small color="blue white--text text-capitalize">
              Invite users
            </v-btn>
          </v-col>
        </v-row>
      </div>
      <div>
        <v-tabs color="blue">
          <v-tab class="text-capitalize"
            >Active<v-icon right color="orange"
              >mdi-numeric-2-circle</v-icon
            ></v-tab
          >
          <v-tab class="text-capitalize"
            >Current<v-icon right color="blue"
              >mdi-numeric-2-circle</v-icon
            ></v-tab
          >
          <v-tab-item>
            <p class="caption pt-3">
              Starting with <span class="blue--text">any letter</span>
            </p>
            <div>
              <h5 class="mb-3">Brian Loh</h5>
              <div class="d-flex">
                <v-card
                  v-for="item in projects"
                  :key="item.id"
                  class="caption pa-1 mr-6"
                  width="300"
                >
                  <v-row>
                    <v-col cols="1" class="pb-0">
                      <v-icon small>mdi-star</v-icon>
                    </v-col>
                    <v-col cols="7" class="pb-0">
                      <span class="mb-0 font-weight-bold">{{ item.name }}</span>
                      <p>(Brian Loh)</p>
                    </v-col>
                    <v-col cols="4" class="text-right pb-0 pr-6">
                      <v-btn small icon>
                        <v-icon>mdi-dots-horizontal</v-icon>
                      </v-btn>
                      <v-btn small icon>
                        <v-icon>mdi-account-circle-outline</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                  <div>
                    <v-tabs color="blue" dense>
                      <v-tab class="text-capitalize">About</v-tab>
                      <v-tab class="text-capitalize">Insight</v-tab>
                      <v-tab-item class="pa-3">
                        <v-btn text small class="text-capitalize my-2">
                          <v-icon left>mdi-tag</v-icon>
                          Add Tag
                        </v-btn>
                        <div>
                          <v-chip
                            v-for="tag in item.tags"
                            :key="tag.tag"
                            close
                            :color="tag.color"
                            small
                            class="mx-1 white--text"
                          >
                            {{ tag.tag }}
                          </v-chip>
                          <!--<v-chip color="blue" close-icon="mdi-delete" small>
                            Training
                          </v-chip>-->
                          <p class="pt-3 mb-0">
                            This project has no recent update
                          </p>
                          <span
                            ><a href="#" class="blue--text">Add update</a></span
                          >
                          <p class="pt-3">
                            {{ item.description }}
                          </p>
                          <v-icon color="blue"
                            >mdi-checkbox-blank-circle</v-icon
                          >
                        </div>
                      </v-tab-item>
                    </v-tabs>
                  </div>
                </v-card>
              </div>
            </div>
          </v-tab-item>
        </v-tabs>
      </div>
    </v-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      projects: [
        {
          id: 0,
          name: 'Teamwork Onboarding',
          tags: [
            {
              tag: 'Onboarding',
              color: 'orange'
            },
            {
              tag: 'Training',
              color: 'blue'
            }
          ],
          description:
            'This project is design to help you in the onboarding phase of your journey wi...'
        },
        {
          id: 1,
          name: 'Test Project 2',
          tags: [],
          description: ''
        }
      ]
    }
  }
}
</script>
