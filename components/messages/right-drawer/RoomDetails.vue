<template>
  <v-container class="pa-0">
    <v-row no-gutters class="pt-4 px-4">
      <span class="font-weight-bold">Team Chat</span>
      <v-spacer></v-spacer>

      <div>
        <v-btn icon small color="secondary">
          <v-icon>mdi-dots-horizontal</v-icon>
        </v-btn>
      </div>
    </v-row>

    <span class="secondary--text body-2 d-block px-4 mt-4">General Info</span>
    <v-list>
      <v-list-item link>
        <v-list-item-avatar size="35" class="my-0 mr-1">
          <v-icon>mdi-alert-circle-outline</v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title class="body-2">About</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link>
        <v-list-item-avatar size="35" class="my-0 mr-1">
          <v-icon>mdi-cog</v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title class="body-2">Settings</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <span class="secondary--text body-2 d-block px-4 mt-2">People</span>
    <v-list>
      <v-list-item
        v-for="(item, index) in items"
        :key="index"
        color="accent"
        @click="
          ''


        "
      >
        <v-badge
          bordered
          bottom
          color="green accent-4"
          dot
          offset-x="23"
          offset-y="12"
        >
          <v-list-item-avatar size="35" class="my-1 mx-1 mr-3">
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>
        </v-badge>

        <v-list-item-content>
          <v-list-item-title class="body-2">{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: 'Juan Dela Cruz'
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: 'Juan Dela Cruz'
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        title: 'Juan Dela Cruz'
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        title: 'Juan Dela Cruz'
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        title: 'Juan Dela Cruz'
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        title: 'Juan Dela Cruz'
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        title: 'Juan Dela Cruz'
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        title: 'Juan Dela Cruz'
      }
    ]
  })
}
</script>
