<script>
    export let form, data
</script>
<h1>Cica {data.x}</h1>

<form method=POST>
    <input type="text" name="x">
    <input type="submit">
</form>

<h2>{Number(form?.y || 0) * 2}</h2>

<style lang="scss">
    h1, h2 {
        color: aliceblue;
    }
    form {
        input {
            border: 1px solid rgb(119, 95, 95);
            border-radius: 5px;
            padding: 5px;
        }
    }
</style>