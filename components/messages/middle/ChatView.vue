<template>
  <v-container fill-height class="pa-0">
    <v-app-bar
      width="100%"
      class="room__viewport--header px-5"
      floating
      flat
      color="transparent"
    >
      <v-avatar tile class="rounded-lg mr-3">
        <v-img src="https://cdn.vuetifyjs.com/images/lists/3.jpg"></v-img>
      </v-avatar>
      <div class="d-block mt-1">
        <div class="title secondary--text font-weight-bold">Team Name</div>
        <div class="caption">
          10 members ·
          <span
            class="secondary--text text-capitalize text pt-1"
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
          max-width="70%"
          flat
        >
          <v-card
            class="pa-2 d-flex"
            :class="onSenderRecieverFlex(item.sender_id)"
            flat
          >
            <div v-if="item.sender_id !== 12345" class="mx-2 align-self-end">
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

            <div :class="onSenderReciever(item.sender_id)">
              <span
                v-if="item.sender_id === 12345 ? false : true"
                class="caption"
              >
                Juan Dela Cruz
              </span>

              <!-- Purely Text -->
              <v-card class="pa-3 rounded-lg body-2" color="flat" flat tile>
                <span>
                  Flex item asdasd asdasd asdasd asdasd asdasd asdasd asdasd
                  asdasdasdasd asdasdasdasd asdasdasdasd asdasdasdasd
                  asdasdasdasd asdasdasdasd asdasdasdasd asdasdasdasd
                  asdasdasdasd asdasdasdasd asdasd
                </span>
              </v-card>

              <!-- Images -->
              <v-card
                flat
                width="400px"
                class="rounded-lg mt-5"
                :class="onSenderRecieverJustify(item.sender_id)"
              >
                <v-row>
                  <v-col
                    v-for="n in 4"
                    :key="n"
                    class="d-flex child-flex"
                    cols="6"
                  >
                    <v-card flat tile class="d-flex">
                      <v-img
                        :src="
                          `https://picsum.photos/500/300?image=${n * 5 + 10}`
                        "
                        :lazy-src="
                          `https://picsum.photos/10/6?image=${n * 5 + 10}`
                        "
                        aspect-ratio="1"
                        class="grey lighten-2 rounded-lg"
                      >
                        <template v-slot:placeholder>
                          <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                          >
                            <v-progress-circular
                              indeterminate
                              color="grey lighten-5"
                            ></v-progress-circular>
                          </v-row>
                        </template>
                      </v-img>
                    </v-card>
                  </v-col>
                </v-row>
              </v-card>

              <!-- Video -->
              <v-card
                flat
                width="400px"
                height="250px"
                class="rounded-lg mt-5 video__embed--container"
                :class="onSenderRecieverJustify(item.sender_id)"
              >
                <video-embed
                  class="video__embed--iframe mb-n2"
                  css="embed-responsive-1by1"
                  src="https://www.youtube.com/watch?v=s4ObxcdXoFE"
                  sandbox="allow-scripts allow-same-origin allow-presentation"
                ></video-embed>
              </v-card>

              <!-- Link Preview -->
              <v-card
                flat
                width="400px"
                class="rounded-lg mt-5 video__embed--container grey"
                :class="onSenderRecieverJustify(item.sender_id)"
              >
                <v-img
                  contain
                  src="https://www.digitalchalk.com/wp-content/uploads/2019/04/top-add-thumbnail-course-offering.jpg"
                >
                </v-img>

                <v-card flat class="flat pa-3" tile>
                  <div class="body-1 font-weight-bold">
                    Course Offering - Udemy.com
                  </div>
                  <div class="body-2 mb-2">Lorem ipsum sit amit dolor...</div>
                  <div class="caption">https://www.udemy.com/</div>
                </v-card>
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
    },

    /**
     * justify position changer base on who is the sender and whos the reciever
     */
    onSenderRecieverJustify(sender_id) {
      return sender_id === 12345 ? 'my-0 ml-auto mr-0' : 'my-0 ml-0 mr-auto'
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
.video__embed--iframe iframe {
  border: none;
  width: 100%;
  height: 100%;
}
.video__embed--iframe {
  height: 100%;
  width: 100%;
}
.video__embed--container {
  overflow: hidden;
}
</style>
