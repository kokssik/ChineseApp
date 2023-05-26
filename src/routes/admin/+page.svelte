<script>
    import SQLite from "tauri-plugin-sqlite-api";
    import { onMount } from "svelte";
    import HanziCard from "$lib/components/HanziCard.svelte";

    let db;

    onMount(async () => {
        console.log("Netušíš xD");
        /* The path will be 'src-tauri/test.db', you can customize the path */

        db = await SQLite.open("./hanzi.db");

        /* execute SQL */
        await db.execute(`
         CREATE TABLE hanzi (id TEXT NOT NULL PRIMARY KEY,
                             symbol TEXT,
                             pronounciation TEXT,
                             meaning TEXT,
                             image TEXT,
                             word1 TEXT,
                             word2 TEXT );

           INSERT INTO hanzi VALUES ('0', '我', 'Wo3', 'Já', 'static/stroke_order/1xd.png', 'xd', 'xd');
           INSERT INTO hanzi VALUES ('1', '是', 'Shi2', 'Být', 'static/stroke_order/1xd.png', 'xd', 'xd');
       `);
    });

    let id = "";
    let symbol = "";
    let pronounciation = "";
    let meaning = "";
    let word1 = "";
    let word2 = "";

    async function submit() {
        await db.execute(
            "INSERT INTO hanzi VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7)",
            [
                (Math.random() + 1).toString(36).substring(7),
                symbol,
                pronounciation,
                meaning,
                "static/stroke_order/1xd.png",
                word1,
                word2,
            ]
        );
    }
</script>

<h1>Add a new hanzi:</h1>
<form class="content">
    <label>Znak:</label>
    <input type="text" bind:value={symbol} />

    <label>Vyslovnost:</label>
    <input type="text" bind:value={pronounciation} />

    <label>Význam:</label>
    <input type="text" bind:value={meaning} />

    <label>Slovo 1:</label>
    <input type="text" bind:value={word1} />

    <label>Slovo 2:</label>
    <input type="text" bind:value={word2} />

    <label>Obrázek:</label>
    <input type="file" />

    <label>Odeslat</label>
    <button on:click={submit}>Odeslat</button>
</form>
