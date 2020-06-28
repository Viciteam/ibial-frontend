<template>
  <v-card
    v-show="!$vuetify.breakpoint.xsOnly"
    color="transparent"
    flat
    class="rounded-xl"
  >
    <div
      v-show="!$vuetify.breakpoint.smAndDown"
      class="px-4 pb-2 primary--text font-weight-bold"
    >
      Tools
    </div>
    <v-list color="transparent" class="pa-0" rounded dense>
      <v-list-item
        v-for="(item, i) in menus"
        :key="i"
        v-model="menus.name"
        v-ripple="{ class: `accent--text` }"
        link
      >
        <v-list-item-icon class="mr-3">
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content v-show="!$vuetify.breakpoint.smAndDown">
          <v-list-item-title>{{ item.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        {
          name: 'Automation Center',
          link: '/',
          icon: 'mdi-robot-industrial'
        },
        {
          name: 'Manage Contacts',
          link: '/',
          icon: 'mdi-contacts'
        },
        {
          name: 'Broadcast Campaignes',
          link: '/',
          icon: 'mdi-email-newsletter'
        },
        {
          name: 'Conversations',
          link: '/',
          icon: 'mdi-account-tie-voice'
        },
        {
          name: 'Deals',
          link: '/',
          icon: 'mdi-shopping'
        },
        {
          name: 'Help Center',
          link: '/',
          icon: 'mdi-help-network'
        },
        {
          name: 'Page & Form Builder',
          link: '/',
          icon: 'mdi-puzzle-edit'
        }
      ]
    }
  }
}
</script>
