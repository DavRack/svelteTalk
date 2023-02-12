<script>
    let clickCount = 0
    $: even = clickCount % 2 == 0
</script>
<h1>Presionaste el botón {clickCount} veces</h1>
<h2>{clickCount} es un número {even? "par" : "impar"}</h2>
<button on:click={()=> clickCount++}>Click me!</button>
