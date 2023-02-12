<script>
  import {userColors} from "src/stores/colors.js"
  export let color
  let modalOpen = false
  function handleSave(){
    $userColors = [ ...$userColors, {...color} ]
    closeModal()
  }
  function openModal(){ modalOpen = true }
  function closeModal(){ modalOpen = false }
</script>
<div class="py">
  <button on:click={openModal}>
    Guardar
  </button>
</div>
{#if modalOpen}
  <div class="modal-background">
    <div class="modal">
      <h2>¿Estas seguro que quieres guardar este color?</h2>
      <div class="flex-row">
        <button on:click={closeModal}>
          Cancelar
        </button>
        <button on:click={handleSave}>
          Guardar
        </button>
      </div>
    </div>
  </div>
{/if}
<style>
  .py{
    padding-top: 0.5em;
    padding-bottom: 1em;
  }
  .modal-background{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    background-color: rgba(150,150,150,0.5);
    backdrop-filter: blur(5px);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20vh;
  }
  .modal{
    background-color: white;
    width: 50vh;
    height: 15vh;
    border-radius: 1em;
    padding: 1em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .flex-row{
    display: flex;
    flex-direction: row;
    justify-content:space-evenly;
  }
</style>
