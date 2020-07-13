<template>
  <v-container class="px-0 pt-0" color="grey lighten-2">
    <v-card tile flat class="tabs__container">
      <v-tabs
        v-model="tabs"
        color="secondary"
        height="45px"
        class="pt-4 px-6"
        grow
      >
        <v-tab :key="0" class="text-capitalize tab__item--btn rounded-t-lg">
          Team Chat
        </v-tab>
        <v-tab :key="1" class="text-capitalize tab__item--btn rounded-t-lg">
          Discussions
        </v-tab>
      </v-tabs>
    </v-card>
    <v-card class="mb-0" tile flat>
      <v-tabs-items v-model="tabs">
        <v-tab-item :key="0">
          <Rooms />
        </v-tab-item>

        <v-tab-item :key="1">
          <Discussions />
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-container>
</template>

<script>
import { Discussions, Rooms } from '~/components/messages/left-drawer'

export default {
  name: 'LeftDrawer',
  components: {
    Discussions,
    Rooms
  },
  data() {
    return {
      tabs: 0
    }
  }
}
</script>

<style scoped>
.tabs__container {
  position: fixed;
  z-index: 3;
  width: 100%;
  top: 0;
}
.tab__item--btn {
  overflow: hidden;
}
</style>
