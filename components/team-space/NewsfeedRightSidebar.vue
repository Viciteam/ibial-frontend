<template>
  <div>
    <v-card class="mb-3 pa-4 rightSidebar" flat>
      <h5 class="mr-10">Add People</h5>
      <p class="caption">
        Workplace is best when everyone in your company uses it.
      </p>
      <v-btn class="blue white--text mb-6" block
        ><span class="text-capitalize">Add People</span></v-btn
      >
      <v-divider class="py-3"></v-divider>
      <h5 class="mr-10">Events and Celebrations</h5>
      <p class="caption mb-6">
        <a href="#" class="blue--text">Upcoming event</a>
      </p>
      <v-divider class="py-3"></v-divider>
      <h5 class="mr-10 pb-6">Trending Posts</h5>
      <v-row v-for="item in items" :key="item.message">
        <v-col cols="2" class="py-0">
          <img src="images/icons/like.svg" />
          <span class="caption">3</span>
        </v-col>
        <v-col cols="8" class="py-0">
          <p class="caption mb-0">{{ item.message }}</p>
          <p class="trending_post">
            <a href="#" class="blue--text">Lorem Ipsum</a> to
            <a href="#" class="blue--text">Lorem Dev Team</a>
          </p>
        </v-col>
        <v-col cols="2" class="pa-0">
          <img src="images/user.png" />
        </v-col>
      </v-row>
      <v-divider class="py-3"></v-divider>
      <h5 class="mr-10 pb-6">People</h5>
      <v-row v-for="item in items" :key="item.id">
        <v-col cols="2" class="py-0">
          <img :src="item.icon" />
        </v-col>
        <v-col cols="10" class="py-0">
          <p class="caption">Lorem Ipsum Dolor</p>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          message: 'Hi wazzup??',
          icon: 'images/user.png'
        },
        {
          id: 2,
          message: 'Love you guys!!',
          icon: 'images/friendsImage.png'
        },
        {
          id: 3,
          message: 'Hangout??',
          icon: 'images/friendsImage2.png'
        },
        {
          id: 4,
          message: 'Hows your day everyone?',
          icon: 'images/user.png'
        }
      ]
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
