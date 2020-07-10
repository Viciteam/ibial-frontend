<template>
  <div v-show="$vuetify.breakpoint.smAndUp" class="leftSidebar">
    <v-card class="mb-3 pa-4" flat>
      <div class="d-flex">
        <h5>Suggested Connections</h5>
        <span class="overline text-capitalize"
          ><a href="#" class="pl-10">See All</a></span
        >
        <v-btn icon class="scrollLeft">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </div>
      <div class="connections px-3">
        <v-row class="flex-nowrap overflow-hidden">
          <v-col v-for="item in connection" :key="item.image">
            <v-img :src="item.image" width="100px"> </v-img>
            <div class="py-1 text-center">
              <v-icon color="#ffb831" style="font-size:15px;"
                >mdi-emoticon-excited</v-icon
              >
              <span style="color:#ffb01b;font-size: 12px;"> 5.0</span>
            </div>
            <div>
              <v-icon style="font-size:15px;">mdi-rss</v-icon>
              <span style="font-size:11px;">30k followers</span>
            </div>
            <div class="py-2">
              <v-btn
                small
                width="100%"
                outlined
                color="blue"
                class="text-capitalize"
              >
                Connect
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-card>

    <v-card class="mb-3 pa-4" flat>
      <div class="d-flex">
        <h5>Suggested Connections</h5>
        <span class="sidebar_ellipses"
          ><a href="#"><img src="images/ellipsis.png" alt=""/></a
        ></span>
        <v-btn icon class="scrollLeft">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </div>
      <div class="connections px-3">
        <v-row class="flex-nowrap overflow-hidden">
          <v-col v-for="item in connectionsub" :key="item.image" class="pr-0">
            <v-img :src="item.image"> </v-img>
            <div>
              <span style="font-size:11px; font-weight:bold;"
                >Lorem ipsum dolor sit dolor</span
              >
            </div>
            <div>
              <span style="font-size:10px;"
                >32k Members • 10k Post per day</span
              >
            </div>
            <div class="py-2">
              <v-btn
                small
                outlined
                width="100%"
                color="blue"
                class="text-capitalize py-2"
              >
                Join Group
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-card>

    <v-card class="mb-3 pa-4" flat>
      <div class="d-flex">
        <h5>Recently Viewed Offerings</h5>
      </div>
      <div class="connections px-3">
        <v-row v-for="item in offering" :key="item.image" class="pr-0 pt-0">
          <v-col cols="4">
            <v-img :src="item.image"> </v-img>
          </v-col>
          <v-col cols="5" class="px-0" style="line-height:1rem;">
            <div class="font-weight-bold" style="font-size: 13px;">
              Shorten.REST
            </div>
            <span style="font-size:10px;"
              >Lorem ipsum dolor sit amet, amet elit</span
            >
            <div>
              <a href="#">
                <img src="images/thumb-up-outline.svg" width="16px" alt="" />
              </a>
              <span style="font-size: 10px;">19</span>
              <a href="#">
                <img src="images/thumb-down-outline.svg" width="16px" alt="" />
              </a>
              <span style="font-size: 10px;">19</span>
              <a href="#">
                <img src="images/comment-outline.svg" width="16px" alt="" />
              </a>
              <span style="font-size: 10px;">19</span>
            </div>
          </v-col>
          <v-col cols="3" class="px-0 text-center py-2">
            <v-icon color="#ffb831" style="font-size:20px;"
              >mdi-emoticon-excited</v-icon
            >
            <p style="color:#ffb01b; margin-bottom: 0px;">
              {{ item.followers }}
            </p>
            <span style="font-size:10px;"><a href="#">Add to Cart </a></span>
          </v-col>
        </v-row>
      </div>
    </v-card>

    <!--  <v-card flat class="pa-4">
      <div class="text-center">
        Your Referral Link:
      </div>
      <div class="text-center ">
        <v-row>
          <v-col class="text-right">
            <a href="#"
              ><v-icon color="blue" style="font-size:25px;"
                >mdi-checkbox-multiple-blank</v-icon
              ></a
            >
          </v-col>
          <v-col class="text-left">
            <a href="#"
              ><v-icon color="blue" style="font-size:25px;"
                >mdi-pencil</v-icon
              ></a
            >
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <a href="#"
              ><v-icon color="#4D6FA9" style="font-size:25px;"
                >mdi-facebook</v-icon
              ></a
            >
            <a href="#"
              ><v-icon color="#65BBF2" style="font-size:25px;"
                >mdi-twitter</v-icon
              ></a
            >
            <a href="#"
              ><v-icon color="#007AAA" style="font-size:25px;"
                >mdi-linkedin</v-icon
              ></a
            >
            <a href="#"
              ><v-icon color="#CB1F24" style="font-size:25px;"
                >mdi-pinterest</v-icon
              ></a
            >
            <a href="#"
              ><v-icon color="#F44336" style="font-size:25px;"
                >mdi-gmail</v-icon
              ></a
            >
          </v-col>
        </v-row>
      </div>
    </v-card>-->
  </div>
</template>
<script>
export default {
  data() {
    return {
      connection: [
        {
          image: 'images/sidebar/image1.png',
          followers: '30k Followers'
        },
        {
          image: 'images/sidebar/image2.png',
          followers: '30k Followers'
        },
        {
          image: 'images/sidebar/image1.png',
          followers: '30k Followers'
        }
      ],
      connectionsub: [
        {
          image: 'images/sidebar/image3.png',
          followers: '30k Followers'
        },
        {
          image: 'images/sidebar/image3.png',
          followers: '30k Followers'
        }
      ],
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
      ]
    }
  }
}
</script>
<style scoped>
.leftSidebar {
  max-width: 296px;
  margin-right: 12px;
}
.sidebar_ellipses {
  position: absolute;
  right: 15px;
  top: 6px;
}
.scrollLeft {
  position: absolute;
  top: 95px;
  left: 0px;
  background: #ffffff;
  width: 35px;
  z-index: 1;
}
</style>
