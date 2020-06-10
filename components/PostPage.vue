<template>
  <div class="postPage">
    <v-card flat>
      <v-card-actions class="postPage_buttons">
        <div class="postButtons">
          <v-btn text tile class="text-capitalize active no-radius" width="50%"
            >Post
          </v-btn>
          <v-btn text tile class="text-capitalize no-radius" width="50%"
            >Sell Something</v-btn
          >
        </div>
      </v-card-actions>
      <v-card-text class="pt-0 pb-0">
        <v-textarea class="pt-0" rows="3" placeholder="What is in your mind?">
        </v-textarea>
      </v-card-text>
      <v-card-actions class="pt-0 pb-3 px-3">
        <div class="postButton_icons">
          <v-btn icon>
            <v-icon>mdi-image-multiple-outline</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-video-vintage</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-link-variant</v-icon>
          </v-btn>
          <v-btn
            class="text-capitalize float-right post-button"
            color="primary"
            depressed
            width="30%"
            >Post
          </v-btn>
        </div>
      </v-card-actions>
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
          <v-select label="Select Filter" dense solo flat> </v-select>
        </v-col>
        <v-col cols="4">
          <v-select label="Sort by" dense solo flat> </v-select>
        </v-col>
      </v-row>
    </div>

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
export default {}
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
</style>
