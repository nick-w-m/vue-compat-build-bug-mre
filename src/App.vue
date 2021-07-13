<template>
  <div>
    <h1 style="font-size: 2rem;">{{ num }}</h1>
    <h1 id="replaceMe" style="font-size: 2rem;">I will be replaced with num through document.querySelector</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    const num = ref(0);

    window.setInterval(() => {
      num.value += 1;
    }, 1000);

    return {
      num
    };
  },
  mounted() {
    window.setInterval(this.updateDomVal, 1000);
  },
  methods: {
    updateDomVal(): void {
      const el = document.querySelector<HTMLElement>('#replaceMe');
      if (el !== null) {
        el.innerHTML = `${this.num}`;
      }
    }
  }
});
</script>
