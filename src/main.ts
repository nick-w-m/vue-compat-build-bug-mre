import { configureCompat } from '@vue/compat';
import {
  createApp
} from 'vue';
import App from './App.vue';

configureCompat({
  MODE: 3
});

createApp(App).mount('#app');
