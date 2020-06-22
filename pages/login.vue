<template>
  <v-card class="login__card" flat>
    <v-row no-gutters>
      <v-col cols="12" class="login__card--image pr-5">
        <v-card class="px-10 pb-6 loginSignup__card" flat>
          <v-img
            class="login__image"
            width="50%"
            src="images/iBial.png"
          ></v-img>

          <v-stepper v-model="e1">
            <v-stepper-items>
              <!--- LOG IN ---->
              <v-stepper-content step="1" class="pa-0">
                <v-row>
                  <v-col cols="12" class="py-0">
                    <v-text-field
                      v-model="email_login"
                      :rules="emailRules"
                      label="Email"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" class="py-0">
                    <v-text-field
                      v-model="password_login"
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
                      @click="login"
                    >
                      <span class="text-capitalize"> Login</span>
                    </v-btn>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" class="py-3 text-center">
                    <span class="subtitle-2">OR</span>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" class="text-center py-0">
                    <v-btn
                      class="signinfb_btn"
                      color="#006699"
                      width="100%"
                      dark
                    >
                      <img src="images/icons/linkedin.png" />
                      <span class="text-capitalize pt-2 pl-2"
                        >Continue with LinkedIn</span
                      >
                    </v-btn>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" class="text-center py-3">
                    <v-btn
                      class="signingoogle_btn"
                      color="#EB4335"
                      width="100%"
                      dark
                    >
                      <img src="images/icons/google.png" />
                      <span class="text-capitalize pt-1 pl-2"
                        >Continue with Google</span
                      >
                    </v-btn>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col class="text-center py-0">
                    <div class="social_icons">
                      <span class="pt-1 pr-3 subtitle-2">More options</span>
                      <v-img
                        class="social_icon"
                        width="25"
                        src="images/icons/fb.svg"
                      ></v-img>
                      <v-img
                        class="social_icon"
                        width="25"
                        src="images/icons/twitter.svg"
                      ></v-img>
                      <v-img
                        class="social_icon"
                        width="25"
                        src="images/icons/apple.svg"
                      ></v-img>
                    </div>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" class="text-center">
                    <span class="subtitle-2">Don't have an account yet?</span>
                    <v-btn
                      depressed
                      small
                      @click=";(e1 = 2), (signInUp = 'Sign In')"
                      ><span
                        class="subtitle-2 text-capitalize"
                        style="color:blue;"
                        >Sign Up</span
                      ></v-btn
                    >
                  </v-col>
                </v-row>
              </v-stepper-content>
              <!-- SIGN UP --->
              <v-stepper-content step="2" class="pa-0">
                <v-form v-model="isFormValid">
                  <v-row>
                    <v-col cols="12" class="py-0">
                      <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="Email"
                      ></v-text-field>
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
                </v-form>
                <v-row>
                  <v-col cols="12" class="text-center py-0">
                    <v-btn
                      class="signup_btn"
                      color="primary"
                      width="100%"
                      :disabled="email == '' || !checkbox || !isFormValid"
                      @click="e1 = 3"
                    >
                      <span class="text-capitalize"> Continue</span>
                    </v-btn>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" class="text-center">
                    <span class="subtitle-2">OR</span>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" class="text-center py-0">
                    <v-btn
                      class="signinfb_btn"
                      color="#006699"
                      width="100%"
                      dark
                    >
                      <img src="images/icons/linkedin.png" />
                      <span class="text-capitalize pt-2 pl-2"
                        >Continue with LinkedIn</span
                      >
                    </v-btn>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" class="text-center py-3">
                    <v-btn
                      class="signingoogle_btn"
                      color="#EB4335"
                      width="100%"
                      dark
                    >
                      <img src="images/icons/google.png" />
                      <span class="text-capitalize pt-1 pl-2"
                        >Continue with Google</span
                      >
                    </v-btn>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col class="text-center py-0">
                    <div class="social_icons">
                      <span class="pt-1 pr-3 subtitle-2">More options</span>
                      <v-img
                        class="social_icon"
                        width="25"
                        src="images/icons/fb.svg"
                      ></v-img>
                      <v-img
                        class="social_icon"
                        width="25"
                        src="images/icons/twitter.svg"
                      ></v-img>
                      <v-img
                        class="social_icon"
                        width="25"
                        src="images/icons/apple.svg"
                      ></v-img>
                    </div>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" class="text-center">
                    <span class="subtitle-2">Already a member?</span>
                    <v-btn
                      depressed
                      small
                      @click=";(e1 = 1), (signInUp = 'Sign Up')"
                      ><span
                        class="subtitle-2 text-capitalize"
                        style="color:blue;"
                        >Sign In</span
                      ></v-btn
                    >
                  </v-col>
                </v-row>
              </v-stepper-content>
              <v-stepper-content step="3" class="pa-0">
                <v-row>
                  <v-col cols="12" class="py-0">
                    <v-text-field v-model="name" label="Name"></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" class="py-0">
                    <v-text-field
                      v-model="password"
                      type="password"
                      label="Password"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" class="py-0">
                    <v-text-field
                      v-model="c_password"
                      type="password"
                      label="Re-type Password"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" class="text-center">
                    <v-btn
                      class="signup_btn"
                      color="primary"
                      width="100%"
                      :disabled="
                        name == '' || password == '' || c_password == ''
                      "
                      @click="register"
                    >
                      <span class="text-capitalize">Sign Up</span>
                    </v-btn>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" class="text-center">
                    <span class="subtitle-2">OR</span>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" class="text-center py-0">
                    <v-btn
                      class="signinfb_btn"
                      color="#006699"
                      width="100%"
                      dark
                    >
                      <img src="images/icons/linkedin.png" />
                      <span class="text-capitalize pt-2 pl-2"
                        >Continue with LinkedIn</span
                      >
                    </v-btn>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" class="text-center py-3">
                    <v-btn
                      class="signingoogle_btn"
                      color="#EB4335"
                      width="100%"
                      dark
                    >
                      <img src="images/icons/google.png" />
                      <span class="text-capitalize pt-1 pl-2"
                        >Continue with Google</span
                      >
                    </v-btn>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col class="text-center py-0">
                    <div class="social_icons">
                      <span class="pt-1 pr-3 subtitle-2">More options</span>
                      <v-img
                        class="social_icon"
                        width="25"
                        src="images/icons/fb.svg"
                      ></v-img>
                      <v-img
                        class="social_icon"
                        width="25"
                        src="images/icons/twitter.svg"
                      ></v-img>
                      <v-img
                        class="social_icon"
                        width="25"
                        src="images/icons/apple.svg"
                      ></v-img>
                    </div>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" class="text-center">
                    <span class="subtitle-2">Already a member?</span>
                    <v-btn
                      depressed
                      small
                      @click=";(e1 = 1), (signInUp = 'Sign Up')"
                      ><span
                        class="subtitle-2 text-capitalize"
                        style="color:blue;"
                        >Sign In</span
                      ></v-btn
                    >
                  </v-col>
                </v-row>
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
        </v-card>
      </v-col>

      <v-footer class="login__footer">
        <v-spacer></v-spacer>
        <div class="text-center">
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Languages</a></li>
            <li><a href="#">Businesses</a></li>
            <li><a href="#">Privacy & Terms</a></li>
            <li><a href="#">Contact</a></li>
            <li>
              <a href="#">&copy; iBial {{ new Date().getFullYear() }}</a>
            </li>
          </ul>
        </div>
      </v-footer>
    </v-row>
    <v-snackbar v-model="popup" :color="color">
      {{ success }}
      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="popup = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      e1: 1,
      checkbox: false,
      popup: false,
      email: '',
      name: '',
      password: '',
      c_password: '',
      email_login: '',
      password_login: '',
      success: '',
      color: '',
      isFormValid: false,
      emailRules: [
        (v) => !!v || 'E-mail is required.',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ]
    }
  },
  methods: {
    register() {
      if (this.password != this.c_password) {
        this.success = 'Password did not match..'
        this.popup = true
        this.color = 'warning'
      } else {
        let params = {
          name: this.name,
          email: this.email,
          password: this.password,
          c_password: this.c_password
        }
        this.$api.accounts.account
          .register(params)
          .then((response) => {
            if (response.success) {
              window.open('/', '_self')
              this.name = ''
              this.password = ''
              this.c_password = ''
              this.email = ''
              this.success = 'Successfully Registered..'
              this.popup = true
              this.color = 'success'
            }
          })
          .catch((err) => {
            console.log(err)
          })
      }
    },
    login() {
      let params = {
        email: this.email_login,
        password: this.password_login
      }
      this.$api.accounts.account
        .login(params)
        .then((response) => {
          if (response.success) {
            window.open('/', '_self')
            this.email_login = ''
            this.password_login = ''
            this.success = 'Successfully Logged In..'
            this.popup = true
            this.color = 'success'
          }
        })
        .catch(() => {
          this.popup = true
          this.color = 'warning'
          this.success = 'Login Failed...'
        })
    }
  }
}
</script>
<style scoped>
.login__card {
  width: 100%;
  height: 100%;
  background-image: url('/images/background/background.png');
  background-repeat: no-repeat;
  background-size: cover;
}
.loginSignup__card {
  max-width: 390px;
  margin: 35px auto;
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
.login__footer {
  position: absolute;
  bottom: 10px;
  width: 100%;
  background: transparent;
  display: block;
}
ul {
  list-style-type: none;
  font-size: 14px;
}
ul li {
  display: inline-block;
  padding: 15px 20px;
}
ul li a {
  text-decoration: none;
  color: #979ea6;
}
</style>
<style>
.v-stepper {
  box-shadow: unset;
}
.v-text-field__details {
  display: none;
}
.v-btn.v-size--default {
  font-size: 13px;
}
</style>
