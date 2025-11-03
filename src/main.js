import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import './style.css'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#5B4FE3',
          secondary: '#F89D24',
          background: '#F5F5F5',
          surface: '#FFFFFF',
          error: '#B00020',
        },
      },
      dark: {
        colors: {
          primary: '#B5A9FF',
          secondary: '#FFB74D',
          background: '#121212',
          surface: '#1E1E1E',
          error: '#CF6679',
        },
      },
    },
  },
})

createApp(App).use(router).use(vuetify).mount('#app')
