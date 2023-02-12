<script>
  import ColorChannelInput from "src/components/ColorChannelInput.svelte"
  export let rgb = {
    r: 0,
    g: 0,
    b: 0,
  }
</script>
<div class="color-input">
  <ColorChannelInput channel={'r'} bind:value={rgb.r}/>
  <ColorChannelInput channel={'g'} bind:value={rgb.g}/>
  <ColorChannelInput channel={'b'} bind:value={rgb.b}/>
</div>
<style>
  .color-input{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
</style>
