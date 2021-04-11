<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <nav>
    <router-link to="/" class="gractwoRoot">
      <img alt="Vue logo" src="./assets/gractwo-smol.png" style="height: 50px">
      <h1>Gractwo</h1>
    </router-link>
    <div>
      <!-- <router-link to="/">główna</router-link> -->
      <!-- <router-link to="/o-nas">o nas</router-link> -->
      <router-link to="/discord">discord</router-link>
      <router-link to="/facebook">facebook</router-link>
    </div>
  </nav>
  <main>
  </main>
  <router-view/>
</template>

<style lang="sass">
  @import url('https://fonts.googleapis.com/css2?family=Lexend&display=swap')
  :root
    --dark-bg: #1a1a1a
    --dark-bg2: #212121
    --dark-bg3: #414141
    --light: #c0c0c0
  *
    margin: 0
  body
    background-color: var(--dark-bg)
    font-family: 'Lexend', sans-serif
    color: var(--light)
    // overflow-y: scroll
    nav
      background-color: var(--dark-bg2)
      display: flex
      flex-direction: row
      padding: .3em 1.5em
      *
        margin: 0 .2em
      .gractwoRoot
        color: inherit
        text-decoration: inherit
        display: flex
        flex-direction: row
        transition-duration: 100ms
        &:focus,&:hover
          transform: scale(1.05) rotate(2deg)
        h1
          font-size: 2.3rem
          letter-spacing: .05em
      div
        margin-left: 1rem
        display: flex
        flex-direction: row
        justify-content: center
        align-items: center
        *
          transition-duration: 100ms
          text-transform: uppercase
          font-size: 1.3rem
          color: inherit
          text-decoration: none
          opacity: 0.7
          margin: 0 .7rem
          &:focus,&:hover
            opacity: 1
            text-decoration: underline
            transform: translate(0, -.1em)
  ::-webkit-scrollbar
    background-color: var(--dark-bg)
    &:hover
      background-color: var(--dark-bg2)
  ::-webkit-scrollbar-thumb
    background-color: var(--dark-bg2)
    border-radius: 16px
    border: 4px solid var(--dark-bg)
    &:hover
      background-color: var(--dark-bg3)
      border: 4px solid var(--dark-bg2)
</style>
