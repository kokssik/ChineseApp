<script>
  export let data;
  import mdParser from "$lib/utils/md-parser";
  import { onMount } from "svelte";
  import SQLite from "tauri-plugin-sqlite-api";

  let rows = [];

  let id = data.slug; // to recognize which lection is opened

  let query = `SELECT * FROM lekce WHERE id = ?`;

  let parsed;

  onMount(async () => {
    const db = await SQLite.open("./hanzi.db");

    rows = await db.select(query, [id]);

    console.log(rows[0].markdown);
    parsed = mdParser(rows[0].markdown);
  });
</script>

{id}

{@html parsed}
