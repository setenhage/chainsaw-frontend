import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createAuth0 } from '@auth0/auth0-vue';

const app = createApp(App)

app.use(router)
app.use(
    createAuth0({
      domain: "dev-c18h5mluplzm6pjc.us.auth0.com",
      clientId: "jjBkLE8FuaMOQqdmsKPrKHpVwVuuUxCi",
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    })
  );

  app.mount('#app')
