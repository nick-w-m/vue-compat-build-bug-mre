import {
  createApp
} from 'vue';
import App from './App.vue';

function createTheApp(): void {
  const app = createApp(App);

  /* Error handler that passes client errors to the main process */
  app.config.errorHandler = (err, instance, info): void => {
    window.console.error('Warn from error', err, instance, info);
  };

  app.config.warnHandler = (msg, vm, trace): void => {
    window.console.warn('Warn from handler', msg, vm, trace);
  };

  // Mount after all other setup is done
  app.mount('#app');
}

createTheApp();
