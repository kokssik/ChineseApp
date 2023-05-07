<script lang="ts">
  export let character: string;
  export let pronunciation: string;
  export let meaning: string;
  export let strokeOrderImg: string;
</script>

<div
  class="block max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow mt-10"
>
  <div class="flex flex-row gap-10">
    <div class="flex-initial">
      <div class="border-solid border-2 rounded-md bg-teal-100 border-blue-400">
        <p class="text-7xl">{character}</p>
      </div>
    </div>
    <div class="flex-initial w-24">
      <div class="flex flex-col">
        <div>Výslovnost:</div>
        <div>{pronunciation}</div>
      </div>
    </div>
    <div class="flex-auto">
      <div class="flex flex-col">
        <div>Význam:</div>
        <div>{meaning}</div>
      </div>
    </div>
    <div class="flex-initial w-96">
      <div class="flex flex-col">
        <div>Stroke board:</div>
        <img src={strokeOrderImg} alt="Wo" />
      </div>
    </div>
  </div>
</div>
