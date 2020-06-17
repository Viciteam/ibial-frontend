<template>
  <v-card class="login__card" flat>
    <v-row no-gutters>
      <v-col cols="12" class="login__card--image pr-5">
        <v-btn
          class="mt-12 float-right mr-12 signin_btn"
          color="primary"
          width="100px"
          dark
          @click="
            e1 == 1
              ? ((e1 = 2), (signInUp = 'Sign In'))
              : ((e1 = 1), (signInUp = 'Sign Up'))
          "
        >
          <span class="text-capitalize">{{ signInUp }}</span>
        </v-btn>

        <v-dialog v-model="dialog" persistent max-width="390">
          <v-card class="px-10 pb-6">
            <v-img
              class="login__image"
              width="50%"
              src="images/iBial.svg"
            ></v-img>

            <v-stepper v-model="e1">
              <v-stepper-items>
                <v-stepper-content step="1" class="pa-0">
                  <v-row>
                    <v-col cols="12" class="py-0">
                      <v-text-field label="Email"></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" class="py-0">
                      <v-text-field
                        type="password"
                        label="Password"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" class="py-0">
                      <span class="subtitle-2"
                        ><a href="#">Forgot Password?</a></span
                      >
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" class="text-center pt-6 pb-0">
                      <v-btn
                        class="signin_btn"
                        color="primary"
                        width="100%"
                        dark
                      >
                        <span class="text-capitalize"> Login</span>
                      </v-btn>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" class="py-3 text-center">
                      <span class="subtitle-2">or</span>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" class="text-center py-0">
                      <v-btn
                        class="signinfb_btn"
                        color="#3D5A98"
                        width="100%"
                        dark
                      >
                        <img src="images/icons/facebook-icon 1.png" />
                        <span class="text-capitalize pt-2 pl-2"
                          >Continue with Facebook</span
                        >
                      </v-btn>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" class="text-center py-3">
                      <v-btn class="signingoogle_btn" width="100%" text>
                        <img src="images/icons/google-icon 1.svg" />
                        <span class="text-capitalize pt-1 pl-2"
                          >Continue with Google</span
                        >
                      </v-btn>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col class="text-center py-0">
                      <div class="social_icons">
                        <v-img
                          class="social_icon"
                          width="35"
                          src="images/icons/gmail.svg"
                        ></v-img>
                        <v-img
                          class="social_icon"
                          width="35"
                          src="images/icons/fb.svg"
                        ></v-img>
                        <v-img
                          class="social_icon"
                          width="35"
                          src="images/icons/linkedin.svg"
                        ></v-img>
                        <v-img
                          class="social_icon"
                          width="35"
                          src="images/icons/twitter.svg"
                        ></v-img>
                        <v-img
                          class="social_icon"
                          width="35"
                          src="images/icons/apple.svg"
                        ></v-img>
                      </div>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" class="py-0 text-center">
                      <span class="subtitle-2">Dont have account yet?</span>
                      <v-btn
                        depressed
                        small
                        @click=";(e1 = 2), (signInUp = 'Sign In')"
                        ><span class="subtitle-2 text-capitalize"
                          >Sign Up</span
                        ></v-btn
                      >
                    </v-col>
                  </v-row>
                </v-stepper-content>
                <v-stepper-content step="2" class="pa-0">
                  <v-row>
                    <v-col cols="12" class="py-0">
                      <v-text-field label="Email"></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" class="py-0 text-center">
                      <div class="email__agreement">
                        <v-checkbox v-model="checkbox"></v-checkbox>
                        <span style="font-size:11px; padding-top:26px;"
                          >By joining I agree to receive email from ibial.</span
                        >
                      </div>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" class="text-center">
                      <v-btn
                        class="signup_btn"
                        color="primary"
                        width="100%"
                        dark
                      >
                        <span class="text-capitalize"> Sign Up</span>
                      </v-btn>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" class="py-3 text-center">
                      <span class="subtitle-2">or continue with</span>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col class="text-center">
                      <div class="social_icons">
                        <v-img
                          class="social_icon"
                          width="35"
                          src="images/icons/gmail.svg"
                        ></v-img>
                        <v-img
                          class="social_icon"
                          width="35"
                          src="images/icons/fb.svg"
                        ></v-img>
                        <v-img
                          class="social_icon"
                          width="35"
                          src="images/icons/linkedin.svg"
                        ></v-img>
                        <v-img
                          class="social_icon"
                          width="35"
                          src="images/icons/twitter.svg"
                        ></v-img>
                        <v-img
                          class="social_icon"
                          width="35"
                          src="images/icons/apple.svg"
                        ></v-img>
                      </div>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" class="py-0 text-center">
                      <span class="subtitle-2">Already a member?</span>
                      <v-btn
                        depressed
                        small
                        @click=";(e1 = 1), (signInUp = 'Sign Up')"
                        ><span class="subtitle-2 text-capitalize"
                          >Sign In</span
                        ></v-btn
                      >
                    </v-col>
                  </v-row>
                </v-stepper-content>
              </v-stepper-items>
            </v-stepper>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      dialog: true,
      e1: 1,
      checkbox: false,
      signInUp: 'Sign Up'
    }
  }
}
</script>
<style scoped>
.login__card {
  width: 100%;
  height: 100%;
  /*background-image: url('/images/signin_background.svg');
  background-repeat: no-repeat;
  background-size: cover;*/
}
.signin_btn {
  z-index: 999;
}
.login__image {
  margin: 0 auto;
}
.subtitle-2 a {
  text-decoration: none;
}
.social_icons {
  display: inline-flex;
}
.social_icon {
  margin: 0px 3px;
}
.social_icon:hover {
  cursor: pointer;
}
.email__agreement {
  display: inline-flex;
}
</style>
<style>
.v-stepper {
  box-shadow: unset;
}
.v-text-field__details {
  display: none;
}
</style>
