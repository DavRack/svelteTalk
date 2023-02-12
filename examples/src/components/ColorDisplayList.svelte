<script>
  import ColorDisplay from "src/components/ColorDisplay.svelte"
  import {userColors} from "src/stores/colors.js"
</script>
{#if $userColors.length > 0}
  <div class="color-display-card">
    <div class="title">Tienes {$userColors.length} colores guardados</div>
    <div class="color-display-list">
      {#each $userColors as userColor}
        <ColorDisplay rgb={userColor} sideLength={"7em"} showRGB/>
      {/each}
    </div>
  </div>
{/if}
<style>
  .color-display-list{
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    width: 100%;
  }
  .color-display-card{
    width: 70vh;
    padding: 2em;
    padding-top: 1em;
    margin: 1em;
    border-radius: 3vh;
    background-color: #eee;
  }
  .title{
    text-align: center;
    font-size: 1.5em;
    margin-bottom: 1em;
  }
</style>
