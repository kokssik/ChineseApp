<script>
  import { TabContent, TabPane } from "sveltestrap";
  import SQLite from "tauri-plugin-sqlite-api";
  import { onMount } from "svelte";
  import HanziCard from "$lib/components/HanziCard.svelte";

  let rows = [];

  onMount(async () => {
    const db = await SQLite.open("./hanzi.db");

    rows = await db.select("SELECT * FROM hanzi");

    console.log(rows);
  });
</script>

<TabContent>
  <TabPane tabId="alpha" tab="Alpha" active>
    <div>
      <h1>Hanzi</h1>
      <p>Hello mothafucka</p>
    </div>
  </TabPane>
  <TabPane tabId="bravo" tab="Bravo">
    <h2>Bravo</h2>
    <img
      alt="Johnny Bravo"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Johnny_Bravo_series_logo.png/320px-Johnny_Bravo_series_logo.png"
    />
  </TabPane>
  <TabPane tabId="charlie" tab="Charlie">
    <h2>Charlie</h2>
    <img
      alt="Charlie Brown"
      src="https://upload.wikimedia.org/wikipedia/en/2/22/Charlie_Brown.png"
    />
  </TabPane>
</TabContent>



<!-- Creates a <HanziCard/> element for each element in the rows array -->
{#each rows as row}
  <HanziCard
    character={row.symbol}
    pronunciation={row.pronounciation}
    meaning={row.meaning}
    strokeOrderImg={row.image}
  />
{/each}

<style>
  .symbol {
    font-size: 75px;
    text-align: center;
  }
  .divSymbol {
    height: 100px;
    width: 60%;
    background-color: rgb(205, 249, 255);
  }
</style>
