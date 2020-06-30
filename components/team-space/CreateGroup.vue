<template>
  <div>
    <h4>Create Room</h4>
    <v-divider class="my-3"></v-divider>
    <v-row>
      <v-col>
        <h5>Name</h5>
        <v-text-field
          placeholder="Choose a name for your group"
          filled
          rounded
          dense
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h5>Select Privacy</h5>
        <v-select
          v-model="privacy"
          :value="privacy"
          :items="items"
          item-text="title"
          dense
          filled
          rounded
        >
          <template v-slot:item="data">
            <div ripple @click="privacy = data.item.title">
              <v-row>
                <v-col cols="1">
                  <v-icon>{{ data.item.icon }}</v-icon>
                </v-col>
                <v-col cols="11">
                  <h5>{{ data.item.title }}</h5>
                  <p class="caption">{{ data.item.subtitle }}</p>
                </v-col>
              </v-row>
            </div>
          </template>
        </v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h5>Members and Teams</h5>
        <v-text-field filled rounded dense></v-text-field>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row>
      <v-col class="pb-0">
        <h5 class="pb-3">Additional Settings</h5>
        <v-row>
          <v-col cols="10" class="py-0">
            <div class="d-flex">
              <span class="caption font-weight-bold">Chat</span>
            </div>
            <p class="caption">
              Automatically create a chat for your group. This limits the number
              of members in this group of 250.
            </p>
          </v-col>
          <v-col cols="2">
            <span
              ><v-switch
                v-model="switch1"
                class="pa-0 ma-0"
                color="blue"
                inset
                absolute
              ></v-switch
            ></span>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="10" class="py-0">
            <div>
              <span class="caption font-weight-bold">Multi Company Group</span>
            </div>
            <p class="caption mb-0">
              Share external updates, files and information securely in a
              multi-company group with anyone outside your company.
            </p>
          </v-col>
          <v-col cols="2">
            <span
              ><v-switch
                v-model="switch2"
                class="pa-0 ma-0"
                color="blue"
                inset
                absolute
              ></v-switch
            ></span>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      switch1: false,
      switch2: false,
      privacy: '',
      items: [
        {
          title: 'Open',
          subtitle:
            'Anyone in ibial can see the group, its members and their posts.',
          icon: 'mdi-lock-open-outline'
        },
        {
          title: 'Close',
          subtitle:
            'Anyone in ibial can find the group and see who’s in it. Only members can see posts.',
          icon: 'mdi-lock-outline'
        },
        {
          title: 'Secret',
          subtitle:
            'Only members can find the group, see who’s in it and what they post.',
          icon: 'mdi-lock-outline'
        }
      ]
    }
  }
}
</script>
