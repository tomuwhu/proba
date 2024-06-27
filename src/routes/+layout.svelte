<template lang="pug">
div(class="menu") Menu 
br
div(class="content") 
  slot
</template>

<style lang="sass">
:global(body) 
  margin: 0
  background-color: rgb(73, 90, 84)
  text-align: center
div.content 
  padding: 20px
div.menu 
  background-color: black
  color: white
  padding: 10px
</style>