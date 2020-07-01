<template>
  <v-container class="pa-0 mt-9" fill-height>
    <v-text-field
      prepend-inner-icon="mdi-magnify"
      placeholder="Search Team..."
      outlined
      rounded
      dense
      color="accent"
      class="mt-5 mx-4"
    ></v-text-field>

    <v-row no-gutters class="pt-4 px-4">
      <span class="font-weight-medium">Team Chat</span>
      <v-spacer></v-spacer>

      <div>
        <v-icon color="secondary">mdi-dots-horizontal</v-icon>
        <v-icon color="secondary">mdi-cog</v-icon>
      </div>
    </v-row>

    <v-list two-line>
      <v-list-item
        v-for="(item, index) in items"
        :key="index"
        color="accent"
        @click="
          ''


        "
      >
        <v-list-item-avatar size="35" class="my-1">
          <v-img :src="item.avatar"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          <v-list-item-subtitle>{{ item.title }}</v-list-item-subtitle>
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
        title: 'Brunch this weekend?',
        subtitle:
          "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: 'Summer BBQ',
        subtitle: "Wish I could come, but I'm out of town this weekend."
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        title: 'Oui oui',
        subtitle: 'Do you have Paris recommendations? Have you ever been?'
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        title: 'Birthday gift',
        subtitle:
          'Have any ideas about what we should get Heidi for her birthday?'
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        title: 'Recipe to try',
        subtitle:
          'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.'
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: 'Brunch this weekend?',
        subtitle:
          "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: 'Summer BBQ',
        subtitle: "Wish I could come, but I'm out of town this weekend."
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        title: 'Oui oui',
        subtitle: 'Do you have Paris recommendations? Have you ever been?'
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        title: 'Birthday gift',
        subtitle:
          'Have any ideas about what we should get Heidi for her birthday?'
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        title: 'Recipe to try',
        subtitle:
          'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.'
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: 'Brunch this weekend?',
        subtitle:
          "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: 'Summer BBQ',
        subtitle: "Wish I could come, but I'm out of town this weekend."
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        title: 'Oui oui',
        subtitle: 'Do you have Paris recommendations? Have you ever been?'
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        title: 'Birthday gift',
        subtitle:
          'Have any ideas about what we should get Heidi for her birthday?'
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        title: 'Recipe to try',
        subtitle:
          'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.'
      }
    ]
  })
}
</script>
