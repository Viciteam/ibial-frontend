<template>
  <v-app light class="app__background--light">
    <Header />

    <v-main>
      <client-only>
        <nuxt />
      </client-only>
    </v-main>
  </v-app>
</template>

<script>
import { Header } from '~/components'

export default {
  components: {
    Header
  }
}
</script>

<style scoped>
.app__background--light {
  background-color: #eef2f3;
}
</style>
