<template>
  <div>
    <v-card flat max-width="800" class="pa-6">
      <v-row>
        <v-col class="py-0">
          <h5>Recent Projects</h5>
        </v-col>
        <v-col class="text-right py-0">
          <a href="#" class="blue--text caption">View all projects</a>
        </v-col>
      </v-row>
      <div class="overflow-hidden">
        <v-row class="flex-nowrap">
          <v-col v-for="item in recentProject" :key="item.title">
            <v-card width="220px" class="py-0 px-3">
              <v-row>
                <v-col cols="1" class="blue pa-0"><span> </span></v-col>
                <v-col cols="11" class="py-0">
                  <h6 class="text-truncate pt-2">{{ item.title }}</h6>
                  <span class="caption">{{ item.subtitle }}</span>
                  <p class="caption text-uppercase py-1 mb-0">
                    Quick Links
                  </p>
                  <v-row>
                    <v-col cols="8" class="py-0">
                      <span class="caption">My Open Issues</span>
                    </v-col>
                    <v-col cols="4" class="py-0 text-right">
                      <span class="caption">{{ item.issue }}</span>
                    </v-col>
                  </v-row>
                  <span class="caption pb-2">Done Issues</span>
                  <div>
                    <v-btn text x-small class="text-lowercase mt-3 pl-0 py-3">
                      {{ item.board }} board
                      <v-icon right>mdi-chevron-down</v-icon>
                    </v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </div>
      <div>
        <v-tabs color="blue">
          <v-tab v-for="tab in tabs" :key="tab.index" class="text-capitalize">
            {{ tab.name }}
          </v-tab>
          <v-tab-item>
            <div class="pa-3">
              <h5 class="text-uppercase">Today</h5>
              <div>
                <v-row
                  v-for="item in works_today"
                  :key="item.title"
                  @click="workedOn"
                >
                  <v-col cols="8" class="py-0">
                    <v-row>
                      <v-col cols="1">
                        <v-icon>mdi-inbox</v-icon>
                      </v-col>
                      <v-col class="caption pb-0" cols="11">
                        <p class="text-truncate mb-0 font-weight-bold">
                          {{ item.title }}
                        </p>
                        <p class="text-truncate mb-0">
                          {{ item.subtitle }}
                        </p>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col cols="2" class="caption py-0">
                    <p class="pt-3">Created</p>
                  </v-col>
                  <v-col cols="2" class="py-0">
                    <v-icon class="mt-2">mdi-account-circle</v-icon>
                  </v-col>
                </v-row>
              </div>
              <div class="pt-3">
                <h5 class="text-uppercase">Yesterday</h5>
                <div>
                  <v-row
                    v-for="item in works_yesterday"
                    :key="item.title"
                    @click="workedOn"
                  >
                    <v-col cols="8" class="py-0">
                      <v-row>
                        <v-col cols="1">
                          <v-icon>mdi-inbox</v-icon>
                        </v-col>
                        <v-col class="caption pb-0" cols="11">
                          <p class="text-truncate mb-0 font-weight-bold">
                            {{ item.title }}
                          </p>
                          <p class="text-truncate mb-0">
                            {{ item.subtitle }}
                          </p>
                        </v-col>
                      </v-row>
                    </v-col>
                    <v-col cols="2" class="caption py-0">
                      <p class="pt-3">Created</p>
                    </v-col>
                    <v-col cols="2" class="py-0">
                      <v-icon class="mt-2">mdi-account-circle</v-icon>
                    </v-col>
                  </v-row>
                </div>
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
      recentProject: [
        {
          title: 'B2B Market Development',
          subtitle: 'Classic Software Project',
          issue: '10',
          board: '1'
        },
        {
          title: 'iBial Growth',
          subtitle: 'Classic Software Project',
          issue: '5',
          board: '1'
        },
        {
          title: 'CEO Initiatives',
          subtitle: 'Classic Software Project',
          issue: '34',
          board: '1'
        },
        {
          title: 'B2B Market Network Business',
          subtitle: 'Classic Software Project',
          issue: '1',
          board: '1'
        },
        {
          title: 'Setup a customer service desk',
          subtitle: '',
          issue: '',
          board: '2'
        }
      ],
      tabs: [
        {
          index: 0,
          name: 'Worked on'
        },
        {
          index: 1,
          name: 'Viewed'
        },
        {
          index: 2,
          name: 'Assigned to me'
        },
        {
          index: 3,
          name: 'Starred'
        }
      ],
      works_today: [
        {
          title: 'Invite by manually entering email address',
          subtitle: 'BMNB-789 . B2B Network Market Development'
        },
        {
          title: 'On mobile apps, invite via import',
          subtitle: 'BMNB-788 . B2B Network Market Development'
        },
        {
          title: 'Invite Facebook friends',
          subtitle: 'BMNB-787 . B2B Network Market Development'
        },
        {
          title: 'Invite via email addresses import (like cloudspoung)',
          subtitle: 'BMNB-786 . B2B Network Market Development'
        },
        {
          title: 'Invite others to join',
          subtitle: 'BMNB-785 . B2B Network Market Development'
        }
      ],
      works_yesterday: [
        {
          title: 'Video and voice call (learn from FB)',
          subtitle: 'CI-171 . CEO Initiatives'
        },
        {
          title: 'Split action (Useful for AB Testing)',
          subtitle: 'BNMD-784 . B2B Network Market Development'
        },
        {
          title: 'New Private Homepage',
          subtitle: 'BMNB-773 . B2B Network Market Development'
        }
      ]
    }
  },
  methods: {
    workedOn() {
      console.log('sample')
    }
  }
}
</script>
