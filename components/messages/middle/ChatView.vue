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
      <v-card class="d-flex flex-column mb-10 px-10" flat>
        <v-card
          v-for="(item, i) in messages"
          :key="i"
          class="pa-2"
          :class="onSenderReciever(item.sender_id)"
          flat
        >
          <v-card
            class="pa-2 d-flex"
            :class="onSenderRecieverFlex(item.sender_id)"
            flat
          >
            <div class="align-self-end mx-2">
              <v-badge
                bordered
                bottom
                color="green accent-4"
                class="item__list--avatar"
                dot
                offset-x="11px"
                offset-y="12px"
              >
                <v-avatar size="35" class="my-1 ">
                  <v-img :src="item.avatar"></v-img>
                </v-avatar>
              </v-badge>
            </div>

            <div>
              <span
                v-if="item.sender_id === 12345 ? false : true"
                class="caption"
              >
                Juan Dela Cruz
              </span>
              <v-card class="pa-3 rounded-lg body-2" color="flat" flat tile>
                <span>
                  Flex item asdasd asdasd asdasd asdasd asdasd asdasd asdasd
                  asdasdasdasd asdasdasdasd asdasdasdasd asdasdasdasd
                  asdasdasdasd asdasdasdasd asdasdasdasd asdasdasdasd
                  asdasdasdasd asdasdasdasd asdasd
                </span>

                <video width="320" height="240" controls>
                  <source
                    src="https://www.youtube.com/watch?v=a3ICNMQW7Ok"
                    type="video/mp4"
                  />
                  <source
                    src="https://www.youtube.com/watch?v=a3ICNMQW7Ok"
                    type="video/ogg"
                  />
                  Your browser does not support the video tag.
                </video>
              </v-card>
            </div>
          </v-card>
        </v-card>
      </v-card>
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
        sender_id: 12341
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        title: 'Juan Dela Cruz',
        message: 'Hi Everyone!!!',
        sender_id: 12345
      }
    ]
  }),
  methods: {
    /**
     * align changer base on who is the sender and whos the reciever
     */
    onSenderReciever(sender_id) {
      return sender_id === 12345 ? 'align-self-end' : 'align-self-start'
    },

    /**
     * flex changer base on who is the sender and whos the reciever
     */
    onSenderRecieverFlex(sender_id) {
      return sender_id === 12345 ? 'flex-row-reverse' : 'flex-row'
    }
  }
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
