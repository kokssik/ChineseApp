<script>
    import SQLite from "tauri-plugin-sqlite-api";
    import { onMount } from "svelte";
    import HanziCard from "$lib/components/HanziCard.svelte";

    // onMount(async () => {
    //   console.log("Netušíš xD");

    //   /** The path will be 'src-tauri/test.db', you can customize the path */
    //   const db = await SQLite.open("./test.db");

    /** execute SQL */
    //   await db.execute(`
    //     CREATE TABLE hanzi (id NUMBER NOT NULL PRIMARY KEY,
    //                         symbol TEXT,
    //                         pronounciation TEXT,
    //                         meaning TEXT,
    //                         image TEXT );
    //
    //       INSERT INTO hanzi VALUES (0, '我', 'Wo3', 'Já', 'static/stroke_order/1xd.png');
    //       INSERT INTO hanzi VALUES (1, '是', 'Shi2', 'Být', 'static/stroke_order/1xd.png');
    //   `);
    // });
</script>
