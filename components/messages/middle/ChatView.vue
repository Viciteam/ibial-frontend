<template>
  <div>
    <v-list>
      <v-list-item v-for="(item, index) in items" :key="index" color="accent">
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
          class="d-block mt-5 pa-4 secondary lighten-3 rounded-xl item__list--content"
        >
          <div class="caption primary--text">
            asdasdas asdasdas asdasdas asdasdas asdasdas asdasdas asdasdas
            asdasdas asdasdas asdasdas asdasdas asdasdas asdasdas asdasdas
            asdasdas asdasdas asdasdas asdasdas asdasdas asdasdas asdasdas
            asdasdas asdasdas asdasdas asdasdas asdasdas asdasdas asdasdas
            asdasdas asdasdas asdasdas asdasdas asdasdas asdasdas asdasdas
            asdasdas asdasdas asdasdas asdasdas asdasd
          </div>
          <!-- <div class="caption secondary--text mt-2">- Juan Dela Cruz</div> -->
        </div>
      </v-list-item>
    </v-list>
  </div>
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
      },
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

<style scoped>
.item__list--avatar {
  align-self: flex-end;
}
.item__list--content {
  align-self: flex-end;
  max-width: 70%;
}
</style>
