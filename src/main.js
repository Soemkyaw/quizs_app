import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/style.css"
import { useDark, useToggle } from '@vueuse/core';

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

app.use(router).mount('#app')
