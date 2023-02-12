<script>
  export let maxValue = 255
  export let minValue = 0
  export let value = 255
</script>

<div class="slider-container">
  <div class="">{value}</div>
  <input
    type="range"
    min={minValue}
    max={maxValue}
    bind:value={value}
    class="w-full"
  >
</div>
<style>
  .slider-container{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .w-full{
    width: 100%;
  }
</style>
