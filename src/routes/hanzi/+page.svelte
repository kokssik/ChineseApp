<script>
  import { TabContent, TabPane } from "sveltestrap";
  import SQLite from "tauri-plugin-sqlite-api";
  import { onMount } from "svelte";

  import HanziCard from "$lib/components/HanziCard.svelte";

  onMount(async () => {
    console.log("Netušíš xD");

    /** The path will be 'src-tauri/test.db', you can customize the path */
    const db = await SQLite.open("./test.db");

    /** execute SQL */
    await db.execute(`
      CREATE TABLE users (name TEST, age INTEGER);
      INSERT INTO users VALUES ('Alice', 42);
      INSERT INTO users VALUES ('Bob', 69);
  `);
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

<HanziCard
  character="我"
  pronunciation="Wo3"
  meaning="já"
  strokeOrderImg="/stroke_order/1xd.png"
/>

<HanziCard
  character="我"
  pronunciation="Wo3"
  meaning="já"
  strokeOrderImg="/stroke_order/2.jpg"
/>

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
