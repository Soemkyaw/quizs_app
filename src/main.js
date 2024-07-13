import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/style.css"
import { useDark, useToggle } from '@vueuse/core';
import { auth } from './firebase/config';
import { onAuthStateChanged } from 'firebase/auth';

let app = createApp(App);
let isDark = useDark();
let toggleDark = useToggle(isDark);

app.mixin({
  data() {
    return {
      isDark,
      toggleDark,
    };
  },
});

let appStart;

onAuthStateChanged(auth, () => {
  if (!appStart) {
    appStart = app.use(router).mount('#app')
  }
})
// app.use(router).mount('#app')
