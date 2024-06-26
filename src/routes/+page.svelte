<script>
    export let form, data
    console.log(form, data)
</script>
Cica {data.x} <br><br>
<form method=POST>
    <input type="text" name="x">
    <input type="submit">
</form>
<style lang="scss">
    form {
        input {
            border: 1px solid rgb(119, 95, 95);
            border-radius: 5px;
            padding: 5px;
        }
    }
</style>