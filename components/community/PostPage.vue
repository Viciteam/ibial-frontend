<template>
  <div class="postPage">
    <v-card flat>
      <v-card-actions class="postPage_buttons">
        <div class="postButtons">
          <v-btn text tile class="text-capitalize active no-radius" width="50%"
            >Post
          </v-btn>
          <v-btn
            v-if="teamspace()"
            text
            tile
            class="text-capitalize no-radius"
            width="50%"
            >Sell Something</v-btn
          >
        </div>
      </v-card-actions>
      <v-card-text class="pt-0 pb-0">
        <v-textarea
          v-model="textPost"
          class="pt-0"
          rows="3"
          placeholder="What is in your mind?"
        >
        </v-textarea>
      </v-card-text>
      <v-card-actions class="pt-0 pb-3 px-3">
        <div class="postButton_icons">
          <v-btn icon @click="$refs.inputUpload.click()">
            <v-icon>mdi-image-multiple-outline</v-icon>
          </v-btn>
          <v-btn icon @click="$refs.inputUpload.click()">
            <v-icon>mdi-video-vintage</v-icon>
          </v-btn>
          <v-btn icon @click="$refs.inputUpload.click()">
            <v-icon>mdi-link-variant</v-icon>
          </v-btn>
          <v-btn
            class="text-capitalize float-right post-button white--text"
            color="blue"
            depressed
            width="30%"
            @click="submitPost"
            >Post
          </v-btn>
        </div>
      </v-card-actions>
      <div class="pl-6">
        <input
          v-show="false"
          ref="inputUpload"
          type="file"
          accept="image/*"
          @change="previewImage"
        />
        <img width="100px" class="preview" :src="imageData" />
      </div>
    </v-card>
    <div class="postContent_button">
      <v-row>
        <v-col cols="3" class="pl-6">
          <v-btn icon>
            <v-icon>mdi-web</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-account-circle-outline</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="4">
          <v-select height="10" label="Select Filter" dense solo flat>
          </v-select>
        </v-col>
        <v-col cols="4">
          <v-select label="Sort by" dense solo flat> </v-select>
        </v-col>
      </v-row>
    </div>

    <v-card
      v-for="item in post.slice().reverse()"
      :key="item.id"
      class="mb-3"
      flat
    >
      <v-card-title>
        <div class="postUserHeading">
          <img src="images/post_user_image.png" alt="" />
          <div class="postUserDetails pl-3">
            <div class="postUserName">
              <h5>{{ item.name }}</h5>
            </div>
            <div class="postUserName_subtitle">
              <img
                src="images/web.svg"
                width="18px"
                style="padding-bottom:5px;"
              /><span
                class="pl-1 overline text-capitalize mb-3 postUserName_time"
                >Public 10:10PM</span
              >
            </div>
          </div>
          <div class="postUserHeading_ellipses">
            <a href="#"><img src="images/ellipsis.png" alt=""/></a>
          </div>
        </div>
      </v-card-title>
      <v-card-text class="pb-0">
        <v-row>
          <v-col class="pt-0 text--primary">
            {{ item.post }}
          </v-col>
        </v-row>
        <v-row v-show="item.image != ''">
          <v-col>
            <img width="100%" class="preview" :src="item.image" />
          </v-col>
        </v-row>
      </v-card-text>

      <div class="postComments_details pl-3 pb-2 d-flex">
        <div class="postComments_icons">
          <a href="#">
            <img src="images/thumb-up-outline.svg" width="16px" alt="" />
          </a>
        </div>
        <div class="postComments_icons">
          <a href="#">
            <img src="images/thumb-down-outline.svg" width="16px" alt="" />
          </a>
        </div>
        <div class="postComments_icons">
          <a href="#">
            <img src="images/comment-outline.svg" width="16px" alt="" />
          </a>
        </div>
        <div class="postComments_icons">
          <a href="#">
            <img src="images/share-outline.svg" width="16px" alt="" />
          </a>
        </div>
        <div class="postComments_total caption">
          15k Comments
        </div>
      </div>
      <div class="postUser_comments px-3">
        <div class="postUser_comments_image">
          <img src="images/user.png" class="postUser_comments_icon" />
        </div>
        <div class="postUser_comments_input">
          <v-text-field
            label="Write a comment"
            background="#EEF2F3"
            dense
            rounded
            solo
            flat
          >
          </v-text-field>
        </div>
      </div>
    </v-card>

    <v-card class="mb-3" flat>
      <v-card-title>
        <div class="postUserHeading">
          <img src="images/post_user_image.png" alt="" />
          <div class="postUserDetails pl-3">
            <div class="postUserName">
              <h5>Lorem Ipsum</h5>
            </div>
            <div class="postUserName_subtitle">
              <img
                src="images/web.svg"
                width="18px"
                style="padding-bottom:5px;"
              /><span
                class="pl-1 overline text-capitalize mb-3 postUserName_time"
                >Public 10:10PM</span
              >
            </div>
          </div>
          <div class="postUserHeading_ellipses">
            <a href="#"><img src="images/ellipsis.png" alt=""/></a>
          </div>
        </div>
      </v-card-title>
      <v-card-text class="pb-0">
        <v-row>
          <v-col cols="6" class="pt-0">
            <img src="images/posts/post1.png" alt="" width="100%" />
          </v-col>
          <v-col cols="6" class="pt-0">
            <img src="images/posts/post2.png" alt="" width="100%" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" class="pt-0">
            <img src="images/posts/post3.png" alt="" width="100%" />
          </v-col>
          <v-col cols="6" class="pt-0">
            <img src="images/posts/post4.png" alt="" width="100%" />
          </v-col>
        </v-row>
      </v-card-text>

      <div class="postComments_details pl-3 pb-2 d-flex">
        <div class="postComments_icons">
          <a href="#">
            <img src="images/thumb-up-outline.svg" width="16px" alt="" />
          </a>
        </div>
        <div class="postComments_icons">
          <a href="#">
            <img src="images/thumb-down-outline.svg" width="16px" alt="" />
          </a>
        </div>
        <div class="postComments_icons">
          <a href="#">
            <img src="images/comment-outline.svg" width="16px" alt="" />
          </a>
        </div>
        <div class="postComments_icons">
          <a href="#">
            <img src="images/share-outline.svg" width="16px" alt="" />
          </a>
        </div>
        <div class="postComments_total caption">
          15k Comments
        </div>
      </div>

      <div class="postUser_comments px-3">
        <div class="postUser_comments_image">
          <img src="images/user.png" class="postUser_comments_icon" />
        </div>
        <div class="postUser_comments_input">
          <v-text-field
            label="Write a comment"
            background="#EEF2F3"
            dense
            rounded
            solo
            flat
          >
          </v-text-field>
        </div>
      </div>

      <div class="postFriends_comments px-3">
        <div class="postFriends_comments_image">
          <img
            src="images/friendsImage.png"
            class="postFriends_comments_icon pt-1"
          />
        </div>
        <div class="postFriends_comments_input">
          <v-row>
            <v-col class="postFriends_name py-0">
              <h5 class="pl-3">Lorem Ipsum</h5>
            </v-col>
          </v-row>
          <v-row>
            <v-col style="padding-top:0px; padding-bottom:0px;">
              <v-textarea
                class="pl-3"
                readonly
                background-color="#0000002b"
                value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                dense
                rows="2"
                style="font-size:12px;"
              >
              </v-textarea>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="pt-0 d-flex">
              <div class="postComments_icons">
                <a href="#">
                  <img src="images/thumb-up-outline.svg" width="16px" alt="" />
                </a>
              </div>
              <div class="postComments_icons">
                <a href="#">
                  <img
                    src="images/thumb-down-outline.svg"
                    width="16px"
                    alt=""
                  />
                </a>
              </div>
              <div class="postComments_icons">
                <a href="#">
                  <img src="images/share-outline.svg" width="16px" alt="" />
                </a>
              </div>
              <div class="postComment_date">
                <span class="overline text-capitalize">January 5, 2020</span>
              </div>
            </v-col>
          </v-row>
        </div>
      </div>

      <div class="postFriends_comments px-3">
        <div class="postFriends_comments_image">
          <img
            src="images/friendsImage2.png"
            class="postFriends_comments_icon pt-1"
          />
        </div>
        <div class="postFriends_comments_input">
          <v-row>
            <v-col class="postFriends_name py-0">
              <h5 class="pl-3">Lorem Ipsum</h5>
            </v-col>
          </v-row>
          <v-row>
            <v-col style="padding-top:0px; padding-bottom:0px;">
              <v-textarea
                class="pl-3"
                readonly
                background-color="#0000002b"
                value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                dense
                rows="2"
                style="font-size:12px;"
              >
              </v-textarea>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="pt-0 d-flex">
              <div class="postComments_icons">
                <a href="#">
                  <img src="images/thumb-up-outline.svg" width="16px" alt="" />
                </a>
              </div>
              <div class="postComments_icons">
                <a href="#">
                  <img
                    src="images/thumb-down-outline.svg"
                    width="16px"
                    alt=""
                  />
                </a>
              </div>
              <div class="postComments_icons">
                <a href="#">
                  <img src="images/share-outline.svg" width="16px" alt="" />
                </a>
              </div>
              <div class="postComment_date">
                <span class="overline text-capitalize">January 5, 2020</span>
              </div>
            </v-col>
          </v-row>
        </div>
      </div>
    </v-card>

    <v-card class="mb-3" flat>
      <v-card-title>
        <div class="postUserHeading">
          <img src="images/post_user_image.png" alt="" />
          <div class="postUserDetails pl-3">
            <div class="postUserName">
              <h5>Lorem Ipsum</h5>
            </div>
            <div class="postUserName_subtitle">
              <img
                src="images/web.svg"
                width="18px"
                style="padding-bottom:5px;"
              /><span
                class="pl-1 overline text-capitalize mb-3 postUserName_time"
                >Public 10:10PM</span
              >
            </div>
          </div>
          <div class="postUserHeading_ellipses">
            <a href="#"><img src="images/ellipsis.png" alt=""/></a>
          </div>
        </div>
      </v-card-title>
      <v-card-text class="pb-0">
        <v-row>
          <v-col cols="12" class="pt-0">
            <img src="images/posts/post5.png" width="100%" alt="" />
          </v-col>
        </v-row>
      </v-card-text>

      <div class="postComments_details pl-3 pb-2 d-flex">
        <div class="postComments_icons">
          <a href="#">
            <img src="images/thumb-up-outline.svg" width="16px" alt="" />
          </a>
        </div>
        <div class="postComments_icons">
          <a href="#">
            <img src="images/thumb-down-outline.svg" width="16px" alt="" />
          </a>
        </div>
        <div class="postComments_icons">
          <a href="#">
            <img src="images/comment-outline.svg" width="16px" alt="" />
          </a>
        </div>
        <div class="postComments_icons">
          <a href="#">
            <img src="images/share-outline.svg" width="16px" alt="" />
          </a>
        </div>
        <div class="postComments_total caption">
          15k Comments
        </div>
      </div>

      <div class="postUser_comments px-3">
        <div class="postUser_comments_image">
          <img src="images/user.png" class="postUser_comments_icon" />
        </div>
        <div class="postUser_comments_input">
          <v-text-field
            label="Write a comment"
            background="#EEF2F3"
            dense
            rounded
            solo
            flat
          >
          </v-text-field>
        </div>
      </div>

      <div class="postFriends_comments px-3">
        <div class="postFriends_comments_image">
          <img
            src="images/friendsImage.png"
            class="postFriends_comments_icon pt-1"
          />
        </div>
        <div class="postFriends_comments_input">
          <v-row>
            <v-col class="postFriends_name py-0">
              <h5 class="pl-3">Lorem Ipsum</h5>
            </v-col>
          </v-row>
          <v-row>
            <v-col style="padding-top:0px; padding-bottom:0px;">
              <v-textarea
                class="pl-3"
                readonly
                background-color="#0000002b"
                value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                dense
                rows="2"
                style="font-size:12px;"
              >
              </v-textarea>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="pt-0 d-flex">
              <div class="postComments_icons">
                <a href="#">
                  <img src="images/thumb-up-outline.svg" width="16px" alt="" />
                </a>
              </div>
              <div class="postComments_icons">
                <a href="#">
                  <img
                    src="images/thumb-down-outline.svg"
                    width="16px"
                    alt=""
                  />
                </a>
              </div>
              <div class="postComments_icons">
                <a href="#">
                  <img src="images/share-outline.svg" width="16px" alt="" />
                </a>
              </div>
              <div class="postComment_date">
                <span class="overline text-capitalize">January 5, 2020</span>
              </div>
            </v-col>
          </v-row>
        </div>
      </div>

      <div class="postFriends_comments px-3">
        <div class="postFriends_comments_image">
          <img
            src="images/friendsImage.png"
            class="postFriends_comments_icon pt-1"
          />
        </div>
        <div class="postFriends_comments_input">
          <v-row>
            <v-col class="postFriends_name py-0">
              <h5 class="pl-3">Lorem Ipsum</h5>
            </v-col>
          </v-row>
          <v-row>
            <v-col style="padding-top:0px; padding-bottom:0px;">
              <v-textarea
                class="pl-3"
                readonly
                background-color="#0000002b"
                value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                dense
                rows="2"
                style="font-size:12px;"
              >
              </v-textarea>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="pt-0 d-flex">
              <div class="postComments_icons">
                <a href="#">
                  <img src="images/thumb-up-outline.svg" width="16px" alt="" />
                </a>
              </div>
              <div class="postComments_icons">
                <a href="#">
                  <img
                    src="images/thumb-down-outline.svg"
                    width="16px"
                    alt=""
                  />
                </a>
              </div>
              <div class="postComments_icons">
                <a href="#">
                  <img src="images/share-outline.svg" width="16px" alt="" />
                </a>
              </div>
              <div class="postComment_date">
                <span class="overline text-capitalize">January 5, 2020</span>
              </div>
            </v-col>
          </v-row>
        </div>
      </div>
    </v-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      textPost: '',
      id: 1,
      show: false,
      imageData: '',
      post: [
        {
          id: 1,
          name: 'Lorem Ipsum',
          post: 'Sample Post',
          image: ''
        }
      ]
    }
  },
  methods: {
    submitPost() {
      const postUserDetails = {
        id: this.id++,
        name: 'Lorem Ipsum',
        post: this.textPost,
        image: this.imageData
      }
      if (this.textPost != '' || this.imageData != '') {
        this.post.push(postUserDetails)
        this.textPost = ''
        this.show = true
        this.imageData = ''
      }
    },
    previewImage: function(event) {
      // Reference to the DOM input element
      var input = event.target
      // Ensure that you have a file before attempting to read it
      if (input.files && input.files[0]) {
        // create a new FileReader to read this image and convert to base64 format
        var reader = new FileReader()
        // Define a callback function to run, when FileReader finishes its job
        reader.onload = (e) => {
          // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
          // Read image as base64 and set to imageData
          this.imageData = e.target.result
        }
        // Start the reader job - read file as a data url (base64 format)
        reader.readAsDataURL(input.files[0])
      }
    },
    teamspace() {
      if (this.$route.path == '/' || this.$route.path == '/home') {
        return true
      } else {
        return false
      }
    }
  }
}
</script>
<style>
.postPage {
  max-width: 482px;
}
.postButtons {
  width: 100%;
  display: flex;
}
.postButton_icons {
  width: 100%;
}
.active {
  border-bottom: 2px solid blue;
}
.postUserHeading {
  width: 100%;
  display: contents;
}
.postUserName_time {
  position: absolute;
}
.postUserHeading_ellipses {
  position: absolute;
  right: 15px;
  top: 0;
}
.postComments_icons {
  padding-left: 10px;
}
.postComments_total {
  position: absolute;
  right: 20px;
}
.postUser_comments,
.postFriends_comments {
  display: flex;
}
.postUser_comments_input,
.postFriends_comments_input {
  width: 100%;
}
.v-text-field > .v-input__control > .v-input__slot > .v-text-field__slot {
  padding-left: 6px;
}
.postComment_date {
  position: absolute;
  right: 12px;
}
.v-input .v-label {
  font-size: 12px;
}
</style>
