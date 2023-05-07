<script lang="ts">
  import { toggleFullscreen } from "$lib/utils/window";
</script>

<h1>Nastavení:</h1>

<button on:click={toggleFullscreen}>Toggle Fullscreen</button>
<div class="btn-group btn-group-toggle" data-toggle="buttons">
  <label class="btn btn-secondary active">
    <input
      type="radio"
      name="options"
      id="option1"
      autocomplete="off"
      checked
    /> Fullscreen
  </label>
  <label class="btn btn-secondary">
    <input type="radio" name="options" id="option2" autocomplete="off" /> Windowed
  </label>
</div>
