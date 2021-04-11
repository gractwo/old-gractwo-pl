<template>
  <main>
    <div class="first">
      <h1>Witajcie w Gractwie!</h1>
      <p>
        Jesteśmy społecznością - grupą ludzi - których kręcą gry. Proste, nie? <br>
      </p>
      <gractwosvg class="g"/>
    </div>
    <div class="second">
      <h1>Spis Moderacji</h1>
      <card
        name="Jakub Mańczak"
        photo="j4mesen.png"
        desc="j4mesen | wannabe programista"
        link="/j4mesen"
      />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import gractwosvg from '@/components/gractwosvg.vue'; // @ is an alias to /src
import card from '@/components/card.vue';

export default defineComponent({
  name: 'Home',
  components: {
    gractwosvg,
    card
  },
});
</script>

<style lang="sass">
  main
    padding: 3rem 8rem
    .g
      position: absolute
      top: 0
      right: 15%
      animation-name: logovibe
      animation-iteration-count: infinite
      animation-duration: 2s
      z-index: -10
    .second
      margin-top: 18rem
  @keyframes logovibe
    0%
      transform: rotate(5deg)
    50%
      transform: rotate(-9deg) scale(0.9)
    100%
      transform: rotate(5deg)
</style>