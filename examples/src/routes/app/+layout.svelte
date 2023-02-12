<a class="home-button" href="/"><b>Inicio</b></a>
<div class="center">
  <div>
    <slot/>
  </div>
</div>
<style>
  .center{
    padding-top: 5vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .home-button{
    all: unset;
    cursor: pointer;
    padding: 1em;
    border-radius: 20%;
    background-color: #aaa;
    font:bold;
    color: white;
  }
</style>
