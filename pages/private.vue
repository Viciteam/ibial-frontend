<template>
  <v-row no-gutters>
    <v-col cols="12" xs="1" sm="1" md="2" lg="2">
      <Drawer class="mt-3" />
    </v-col>
    <v-col cols="12" xs="11" sm="11" md="10" lg="9">
      <AutomationMenu />
    </v-col>
  </v-row>
</template>

<script>
import { Drawer, AutomationMenu } from '~/components/private'

export default {
  layout: 'main',
  components: {
    Drawer,
    AutomationMenu
  }
}
</script>
