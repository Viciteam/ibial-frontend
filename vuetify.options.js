import colors from 'vuetify/es5/util/colors'

export default {
  theme: {
    light: true,
    themes: {
      dark: {
        primary: colors.blue.darken2,
        accent: colors.grey.darken3,
        secondary: colors.amber.darken3,
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3
      },
      light: {
        primary: '#100F16',
        accent: '#045AFC',
        secondary: '#979EA6',
        info: colors.teal.lighten1,
        warning: '#FFB01B',
        error: '#F15D3D',
        success: '#5ED172',
        flat: '#EEF2F3'
      }
    }
  }
}
