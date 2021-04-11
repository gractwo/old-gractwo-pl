<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/gractwo.png" style="height: 72px"> -->
    <HelloWorld msg="Welcum to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  // components: {
  //   HelloWorld,
  // },
});
</script>
