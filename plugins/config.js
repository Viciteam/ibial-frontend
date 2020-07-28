const gateway = {
  //save token to local storage
  //to access:  this.$gateway.access('sampletoken')
  savetoken(usertoken) {
    localStorage.setItem('token', JSON.stringify(usertoken))
  },

  access(logintoken) {
    let token = localStorage.getItem('token')
    let user = JSON.parse(token)

    if (logintoken === user.logintoken) {
      return true
    } else {
      return false
    }
  }
}

export default ({ app }, inject) => {
  inject('gateway', gateway)
}
