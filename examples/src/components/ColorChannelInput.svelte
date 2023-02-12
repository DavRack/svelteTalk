<script>
  import SliderInput from "src/components/SliderInput.svelte"
  import ColorDisplay from "src/components/ColorDisplay.svelte"

  export let value = 0
  export let channel = "r"
  export let displaySize = "6em"
  let colorValue = {
    r: 0,
    g: 0,
    b: 0,
  }
  $: colorValue[channel] = value
</script>
<div class="layout">
  <ColorDisplay rgb={colorValue} sideLength={displaySize}/>
  <SliderInput bind:value={value}/>
</div>
<style>
  .layout{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
