<script lang="ts">
const t = Array(10).fill(0).map(v => Array(10).fill("&nbsp;"))
var next = "X"
const e = {
    f(i: number, j:number) {
        t[j][i] = (next == "X") ? next = "O" : next = "X"
    }
}
</script>

<template lang="pug">
h1 Abőba
div.c
    table
    +each('t as r, j')
        tr
        +each('r as c, i')
            td( on:click!='{() => e.f(i, j)}',
                class!="{c}"
            ) {@html c}
</template>

<style lang="sass">
div.c
    display: inline-block
td
    border: 1px solid black
    padding: 10px
    width: 45px
    font-size: 40px
    cursor: pointer
td.X
    background-color: red
td.O
    background-color: blue
</style>