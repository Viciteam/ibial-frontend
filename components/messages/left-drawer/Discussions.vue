<template>
  <v-container class="pa-0" fill-height>
    <v-text-field
      prepend-inner-icon="mdi-magnify"
      placeholder="Search Teams..."
      filled
      rounded
      dense
      color="accent"
      class="mt-5 mx-4"
    ></v-text-field>

    <v-row no-gutters class="pt-4 px-4">
      <span class="font-weight-bold pl-2 secondary--text">Discussions</span>
      <v-spacer></v-spacer>

      <div>
        <v-btn small icon color="tertiary">
          <v-icon>mdi-dots-horizontal</v-icon>
        </v-btn>
        <v-btn small icon color="tertiary">
          <v-icon>mdi-cog</v-icon>
        </v-btn>
        <v-btn small icon color="tertiary">
          <v-icon>mdi-file-document-edit</v-icon>
        </v-btn>
      </div>
    </v-row>

    <v-list two-line width="100%">
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
          <v-list-item-title class="body-2">
            {{ item.name }}
          </v-list-item-title>
          <v-list-item-subtitle class="caption mt-1">
            {{ item.subtitle }}
          </v-list-item-subtitle>
        </v-list-item-content>

        <v-badge class="mx-2" color="green accent-4" dot></v-badge>
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
        name: 'Juan Dela Cruz',
        subtitle: 'Lorem ipsum dolor sit amit ipsum dolor sit'
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        name: 'Juan Dela Cruz',
        subtitle: 'Lorem ipsum dolor sit amit ipsum dolor sit'
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        name: 'Juan Dela Cruz',
        subtitle: 'Lorem ipsum dolor sit amit ipsum dolor sit'
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        name: 'Juan Dela Cruz',
        subtitle: 'Lorem ipsum dolor sit amit ipsum dolor sit'
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        name: 'Juan Dela Cruz',
        subtitle: 'Lorem ipsum dolor sit amit ipsum dolor sit'
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        name: 'Juan Dela Cruz',
        subtitle: 'Lorem ipsum dolor sit amit ipsum dolor sit'
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        name: 'Juan Dela Cruz',
        subtitle: 'Lorem ipsum dolor sit amit ipsum dolor sit'
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        name: 'Juan Dela Cruz',
        subtitle: 'Lorem ipsum dolor sit amit ipsum dolor sit'
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        name: 'Juan Dela Cruz',
        subtitle: 'Lorem ipsum dolor sit amit ipsum dolor sit'
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        name: 'Juan Dela Cruz',
        subtitle: 'Lorem ipsum dolor sit amit ipsum dolor sit'
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        name: 'Juan Dela Cruz',
        subtitle: 'Lorem ipsum dolor sit amit ipsum dolor sit'
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        name: 'Juan Dela Cruz',
        subtitle: 'Lorem ipsum dolor sit amit ipsum dolor sit'
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        name: 'Juan Dela Cruz',
        subtitle: 'Lorem ipsum dolor sit amit ipsum dolor sit'
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        name: 'Juan Dela Cruz',
        subtitle: 'Lorem ipsum dolor sit amit ipsum dolor sit'
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        name: 'Juan Dela Cruz',
        subtitle: 'Lorem ipsum dolor sit amit ipsum dolor sit'
      }
    ]
  })
}
</script>
