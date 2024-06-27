<script lang="ts">
  export let form:object, data:object
</script>

<template lang="pug">
h1 Cica {data.x}
form(method='POST')
  input(type="text" name="x")
  input(type="submit")

h2 {Number(form?.y || 0) * 2}
</template>

<style lang="sass">
h1, h2 
  color: aliceblue
form 
  input 
    border: 1px solid rgb(119, 95, 95)
    border-radius: 5px
    padding: 5px
</style>