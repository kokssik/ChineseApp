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

<!-- TEST - TAB -->
<div class="sm:hidden">
  <label for="tabs" class="sr-only">Select your country</label>
  <select
    id="tabs"
    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  >
    <option>Profile</option>
    <option>Canada</option>
    <option>France</option>
    <option>Germany</option>
  </select>
</div>
<ul
  class="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400"
>
  <li class="w-full">
    <a
      href="#"
      class="inline-block w-full p-4 text-gray-900 bg-gray-100 rounded-l-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white"
      aria-current="page">Profile</a
    >
  </li>
  <li class="w-full">
    <a
      href="#"
      class="inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
      >Dashboard</a
    >
  </li>
  <li class="w-full">
    <a
      href="#"
      class="inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
      >Settings</a
    >
  </li>
  <li class="w-full">
    <a
      href="#"
      class="inline-block w-full p-4 bg-white rounded-r-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
      >Invoice</a
    >
  </li>
</ul>
<!-- TEST - TAB -->

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
