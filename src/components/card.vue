<template>
  <router-link :to="link" class="card" target="_blank">
    <img alt="" :src="require(`../assets/spis/${photo}`)" />
    <div class="card-inner">
      <p class="name">{{ name }}</p>
      <p class="desc">{{ desc }}</p>
    </div>
  </router-link>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'card',
    props: {
      name: String,
      photo: String,
      desc: String,
      link: String,
    },
  });
</script>

<style lang="sass" scoped>
  .card
    background-color: var(--dark-bg2)
    display: flex
    flex-direction: row
    margin: 1rem
    border-radius: 8px
    width: 24rem
    user-select: none
    color: inherit
    text-decoration: inherit
    transition-duration: 100ms
    img
      width: 84px
      border-radius: 8px 0 0 8px
    .card-inner
      padding: .2rem
      margin-left: .5rem
      .name
        font-size: 1.7em
        letter-spacing: 0.1em
      .meta
        opacity: 0.5
    &:focus,&:hover
      background-color: var(--dark-bg3)
      transform: scale(1.05)

  @media only screen and (max-width: 872px)
    .card
      font-size: .8em
      width: 18rem
      img
        width: 64px
</style>
