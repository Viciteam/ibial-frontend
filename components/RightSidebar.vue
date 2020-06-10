<template>
  <div v-show="$vuetify.breakpoint.mdAndUp" class="rightSidebar">
    <v-card class="mb-3 pa-4" flat>
      <div class="d-flex">
        <h5 class="mr-10">Your Cart</h5>
        <span class="overline text-capitalize"
          ><a href="#" class="pl-10">Check Out</a></span
        >
      </div>
      <div class="px-3">
        <v-row v-for="item in offering" :key="item.image" class="pr-0 pt-0">
          <v-col cols="4">
            <v-img :src="item.image"> </v-img>
          </v-col>
          <v-col cols="8" class="pl-0 pr-3">
            <div class="font-weight-bold" style="font-size: 13px;">
              Lorem Ipsum
            </div>
            <span style="font-size:10px;">Lorem ipsum dolor sit amet</span>
            <div class="font-weight-bold" style="font-size: 13px;">
              $320.00/each
            </div>
          </v-col>
        </v-row>
      </div>
    </v-card>

    <v-card flat class="pa-4">
      <div class="d-flex">
        <h5>Messages</h5>
        <span class="sidebar_ellipses"
          ><a href="#"><img src="images/ellipsis.png" alt=""/></a
        ></span>
      </div>
      <div class="px-3">
        <v-row
          v-for="item in users_comment"
          :key="item.image"
          class="pr-0 pt-0"
        >
          <v-col cols="4">
            <v-img :src="item.image"> </v-img>
          </v-col>
          <v-col cols="8" class="pl-0 pr-3" style="display:grid;">
            <div class="font-weight-bold" style="font-size: 13px;">
              Lorem Ipsum
            </div>
            <span style="font-size:10px;">You: Lorem ipsum dolor sit amet</span>
            <span style="color: #bfbbbb;font-size: 12px;">
              {{ item.followers }}
            </span>
          </v-col>
        </v-row>
      </div>
    </v-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      offering: [
        {
          image: 'images/sidebar/image4.png',
          followers: '1521'
        },
        {
          image: 'images/sidebar/image5.png',
          followers: '405'
        },
        {
          image: 'images/sidebar/image6.png',
          followers: '240'
        }
      ],
      users_comment: [
        {
          image: 'images/avatars/avatar1.png',
          followers: '1 Hour Ago'
        },
        {
          image: 'images/avatars/avatar2.png',
          followers: '3 Days Ago'
        },
        {
          image: 'images/avatars/avatar3.png',
          followers: '3 Days Ago'
        },
        {
          image: 'images/avatars/avatar4.png',
          followers: '3 Days Ago'
        },
        {
          image: 'images/avatars/avatar5.png',
          followers: '3 Days Ago'
        }
      ]
    }
  }
}
</script>
<style scoped>
.rightSidebar {
  max-width: 296px;
  margin-left: 12px;
}
.sidebar_ellipses {
  position: absolute;
  right: 15px;
  top: 6px;
}
</style>
