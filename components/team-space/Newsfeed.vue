<template>
  <div class="NewsfeedPage">
    <v-card class="mb-3" flat width="100%">
      <v-card-title>
        <img src="images/icons/html.svg" class="pr-3" />
        Newsfeed
      </v-card-title>
    </v-card>
    <v-row>
      <v-col cols="8">
        <PostPage />
      </v-col>
      <v-col cols="4" class="pl-0">
        <NewsfeedRightSidebar />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import PostPage from '~/components/PostPage.vue'
import NewsfeedRightSidebar from '~/components/team-space/NewsfeedRightSidebar.vue'
export default {
  components: {
    PostPage,
    NewsfeedRightSidebar
  }
}
</script>
<style></style>
