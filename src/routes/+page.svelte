<script lang="ts">
  export let form:object, data:object
  var l:string = "cica"
  function f(c:string) { l += c }
</script>

<template lang="pug">
h1 Cica {data.x}
form(method='POST')
  input(type="text" name="x")
  input(type="submit")
h2 {Number(form?.y || 0) * 2}
+each('l as c') 
  button.x(on:click!="{(e) => f(c)}") {c}
</template>

<style lang="sass">
h1, h2 
  color: aliceblue
form 
  input 
    border: 1px solid rgb(119, 95, 95)
    border-radius: 5px
    padding: 5px
.x
  display: inline-block
  padding: 5px
  margin: 5px
  background-color: rgb(119, 240, 255)
  border: solid 3px gray
  border-radius: 10px
  width: 34px
.x:hover
  background-color: rgb(159, 240, 255)
  cursor: pointer
</style>