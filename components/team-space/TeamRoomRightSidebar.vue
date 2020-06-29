<template>
  <div>
    <v-card class="mb-3 pa-4 rightSidebar" flat>
      <v-list dense>
        <v-list-item @click="link">
          <v-list-item-action>
            <v-icon>mdi-bell-ring-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              Notifications
            </v-list-item-title>
            <v-list-item-subtitle>
              All messages and posts
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item @click="link">
          <v-list-item-action>
            <v-icon>mdi-account-plus-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              Add Members
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="link">
          <v-list-item-action>
            <v-icon>mdi-account-multiple-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              Manage Members
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item @click="link">
          <v-list-item-action>
            <v-icon>mdi-pencil-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              Edit Name
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="link">
          <v-list-item-action>
            <v-icon>mdi-format-align-left</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              Edit Descriptions
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="link">
          <v-list-item-action>
            <v-icon>mdi-cog-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              Settings
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item @click="link">
          <v-list-item-action>
            <v-icon>mdi-close-box-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              Unfollow in Newsfeed
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item @click="link">
          <v-list-item-action>
            <v-icon>mdi-alert-box-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              Report
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="link">
          <v-list-item-action>
            <v-icon>mdi-export</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              Leave
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>
<script>
export default {
  methods: {
    link() {
      console.log('click')
    }
  }
}
</script>
<style>
.rightSidebar {
  width: 260px;
}
.trending_post {
  font-size: 10px;
}
</style>
