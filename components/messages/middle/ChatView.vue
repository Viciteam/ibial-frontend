<template>
  <v-container fill-height class="pa-0">
    <v-app-bar
      width="100%"
      class="room__viewport--header"
      floating
      flat
      color="transparent"
    >
      <v-avatar tile class="rounded-lg mr-3">
        <v-img src="https://cdn.vuetifyjs.com/images/lists/3.jpg"></v-img>
      </v-avatar>
      <div class="d-block mt-1">
        <div class="title font-weight-bold">Team Name</div>
        <div class="caption">
          10 members ·
          <span
            class="primary--text text-capitalize text pt-1"
            @click="
              ''


            "
          >
            Add Description
          </span>
        </div>
      </div>
    </v-app-bar>

    <div class="room__viewport">
      <v-list color="transparent">
        <v-list-item
          v-for="(item, index) in messages"
          :key="index"
          color="accent"
          class="mt-5"
        >
          <v-badge
            bordered
            bottom
            color="green accent-4"
            class="item__list--avatar"
            dot
            offset-x="25"
            offset-y="12"
          >
            <v-list-item-avatar size="35" class="my-1 ">
              <v-img :src="item.avatar"></v-img>
            </v-list-item-avatar>
          </v-badge>

          <div
            class="d-block mt-1 py-2 px-3 flat rounded-xl item__list--content"
          >
            <div class="caption tertiary--text">
              {{ item.message }}
            </div>
            <!-- <div class="caption secondary--text mt-2">- Juan Dela Cruz</div> -->
          </div>
        </v-list-item>
      </v-list>
    </div>

    <v-card flat color="transparent" width="100%" class="py-5 px-6">
      <v-row no-gutters align="center">
        <v-btn icon color="tertiary">
          <v-icon>mdi-emoticon-happy</v-icon>
        </v-btn>
        <v-btn icon color="tertiary">
          <v-icon>mdi-image</v-icon>
        </v-btn>
        <v-btn icon color="tertiary">
          <v-icon>mdi-video</v-icon>
        </v-btn>
        <v-textarea
          clear-icon="mdi-close"
          background-color="flat"
          color="primary"
          class="ml-3 body-2"
          placeholder="Type a message..."
          rows="2"
          no-resize
          hide-details
          solo
          flat
        ></v-textarea>
        <v-btn icon color="tertiary" class="mx-3">
          <v-icon>mdi-send</v-icon>
        </v-btn>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    messages: [
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: 'Juan Dela Cruz',
        message: 'Hi Everyone!!!',
        sender_id: 12345
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: 'Juan Dela Cruz',
        message: 'Hi Everyone!!!',
        sender_id: 12345
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        title: 'Juan Dela Cruz',
        message: 'Hi Everyone!!!',
        sender_id: 12345
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        title: 'Juan Dela Cruz',
        message: 'Hi Everyone!!!',
        sender_id: 12345
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        title: 'Juan Dela Cruz',
        message: 'Hi Everyone!!!',
        sender_id: 12345
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        title: 'Juan Dela Cruz',
        message: 'Hi Everyone!!!',
        sender_id: 12345
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        title: 'Juan Dela Cruz',
        message: 'Hi Everyone!!!',
        sender_id: 12345
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        title: 'Juan Dela Cruz',
        message: 'Hi Everyone!!!',
        sender_id: 12345
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: 'Juan Dela Cruz',
        message: 'Hi Everyone!!!',
        sender_id: 12345
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: 'Juan Dela Cruz',
        message: 'Hi Everyone!!!',
        sender_id: 12345
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        title: 'Juan Dela Cruz',
        message: 'Hi Everyone!!!',
        sender_id: 12345
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        title: 'Juan Dela Cruz',
        message: 'Hi Everyone!!!',
        sender_id: 11111
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        title: 'Juan Dela Cruz',
        message: 'Hi Everyone!!!',
        sender_id: 12345
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        title: 'Juan Dela Cruz',
        message: 'Hi Everyone!!!',
        sender_id: 12345
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        title: 'Juan Dela Cruz',
        message: 'Hi Everyone!!!',
        sender_id: 12345
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        title: 'Juan Dela Cruz',
        message: 'Hi Everyone!!!',
        sender_id: 12345
      }
    ]
  })
}
</script>

<style scoped>
/* .item__list--avatar {
  align-self: flex-end;
} */
.item__list--content {
  align-self: flex-start;
  justify-self: left;
  max-width: 70%;
}
.row__container--height {
  height: 100%;
}
.room__viewport {
  width: 100%;
  height: calc(100vh - 249px);
  overflow-y: scroll;
  display: flex;
  flex-direction: column-reverse;
}
</style>

<style>
.room__viewport::-webkit-scrollbar {
  width: 5px;
}

.room__viewport::-webkit-scrollbar-track {
  background-color: transparent;
}

.room__viewport::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
  border-radius: 10px !important;
}
</style>
