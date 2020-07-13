<template>
  <v-container class="pa-0" fill-height>
    <v-autocomplete
      v-model="searchedModel"
      prepend-inner-icon="mdi-magnify"
      append-icon=""
      placeholder="Search Teams..."
      filled
      rounded
      :items="searched"
      item-value="id"
      dense
      color="accent"
      class="mt-5 mx-4"
    >
      <template v-slot:selection></template>
      <template v-slot:item="{ item }" @click="searchNow">
        <template v-if="typeof item !== 'object'">
          <v-list-item-content>{{ item }}</v-list-item-content>
        </template>
        <template v-else-if="item.type === 'room'">
          <v-list-item-avatar>
            <img :src="item.avatar" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.name }}
            </v-list-item-title>
          </v-list-item-content>
        </template>
        <template v-else-if="item.type === 'message'">
          <v-list-item-content>
            <v-list-item-title>
              {{ item.name }}
            </v-list-item-title>
          </v-list-item-content>
        </template>
      </template>
    </v-autocomplete>

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
        v-for="(item, index) in rooms"
        :key="index"
        color="accent"
        link
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
    searchedModel: '',
    rooms: [
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
    ],
    searched: [
      { header: 'Conversations' },
      {
        name: 'Hi Everyone!!!',
        type: 'message',
        id: 12345
      },
      {
        name: 'Hi Everyone!!! ',
        type: 'message',
        id: 12341
      },
      {
        name: 'Hi Everyone!!!',
        type: 'message',
        id: 12342
      },
      {
        name: 'Hi Everyone!!!',
        type: 'message',
        id: 12343
      },
      {
        name: 'Hi Everyone!!!',
        type: 'message',
        id: 12344
      },
      { divider: true },
      { header: 'People & Groups' },
      {
        name: 'Britta Holt',
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        type: 'room',
        id: 12346
      },
      {
        name: 'Jane Smith ',
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        type: 'room',
        id: 12347
      },
      {
        name: 'John Smith',
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        type: 'room',
        id: 12348
      },
      {
        name: 'Sandra Williams',
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        type: 'room',
        id: 12349
      },
      {
        name: 'Maria Labo',
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        type: 'room',
        id: 12340
      }
    ]
  }),
  methods: {
    searchNow() {
      this.searchedModel = ''
    }
  }
}
</script>
