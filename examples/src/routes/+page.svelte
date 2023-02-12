<script>
  const apps = [
    "primer-componente",
    "rgb",
  ]
</script>
<h1>Welcome to Svelte!</h1>
<h2>Aplicaciones</h2>
{#each apps as app}
  <li><a href="/app/{app}">{app}</a></li>
{/each}
