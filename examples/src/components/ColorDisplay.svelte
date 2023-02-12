<script>
  export let rgb = {r: 100, g:100, b:100}
  export let sideLength="10em"
  export let showRGB = false
</script>
<div class="color-container">
  <div 
    class="color-box"
    style="
    width: {sideLength};
    height: {sideLength};
    background-color: rgba({rgb.r}, {rgb.g}, {rgb.b});
    border-radius: 10%;
    ">
  </div>
  {#if showRGB}
    <div class="color-value">
      rgb({rgb.r}, {rgb.g}, {rgb.b})
    </div>
  {/if}
</div>
<style>
  .color-value{
    font: bold;
    margin-top: 0.2em;
    margin-bottom: 0.5em;
    text-align: center;
  }
  .color-container{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
