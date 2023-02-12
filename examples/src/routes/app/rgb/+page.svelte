<script>
  import ColorInput from "src/components/ColorInput.svelte"
  import ColorDisplay from "src/components/ColorDisplay.svelte"
  import ColorDisplayList from "src/components/ColorDisplayList.svelte"
  import SaveColor from "src/components/SaveColor.svelte"

  let userColor = {
    r: 200,
    g: 200,
    b: 200,
  }
</script>
<div class="user-color">
  <h1>Crea tu color!</h1>
  <ColorDisplay rgb={userColor} showRGB/>
  <ColorInput bind:rgb={userColor}/>
  <SaveColor color={userColor}/>
  <ColorDisplayList/>
</div>
<style>
  .user-color{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
