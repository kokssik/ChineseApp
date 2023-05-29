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

        CREATE TABLE lekce (id TEXT NOT NULL PRIMARY KEY,
                            markdown TEXT);

        INSERT INTO lekce VALUES ('lekce69', '#nadpis1
                                              ##nadpis2
                                              text xd
                                              dddfgfgegetget');

        INSERT INTO lekce VALUES ('lekce420', '#nabdgbgd
                                              ##nadpibdbd
                                              text bgdbdgbdbd
                                              UwU');
       `);
    });

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

    let id = "";
    let markdown = "";

    async function submitMarkdown() {
        await db.execute("INSERT INTO lekce VALUES (?1, ?2)", [id, markdown]);
    }
</script>

<h1>Add a new hanzi:</h1>
<form class="content">
    <table>
        <tr>
            <td><label for="hanzi_insert">Znak:</label></td>
            <td><input type="text" bind:value={symbol} /></td>
        </tr>

        <tr>
            <td><label for="hanzi_insert">Vyslovnost:</label></td>
            <td><input type="text" bind:value={pronounciation} /></td>
        </tr>
        <tr>
            <td><label for="hanzi_insert">Význam:</label></td>
            <td><input type="text" bind:value={meaning} /></td>
        </tr>
        <tr>
            <td><label for="hanzi_insert">Slovo 1:</label></td>
            <td><input type="text" bind:value={word1} /></td>
        </tr>
        <tr>
            <td> <label for="hanzi_insert">Slovo 2:</label></td>
            <td> <input type="text" bind:value={word2} /></td>
        </tr>
        <tr>
            <td><label for="hanzi_insert">Obrázek:</label></td>
            <td><input type="file" /></td>
        </tr><tr>
            <td> <label for="hanzi_insert">Odeslat</label> </td>
            <td><button on:click={submit}>Odeslat</button></td>
        </tr>
    </table>
</form>

<h1>Insert markdown into DB:</h1>

<form action="/action_page.php">
    <p><label for="markdown_insert">id:</label></p>
    <input type="text" bind:value={id} />
    <p><label for="markdown_insert">Markdown code:</label></p>
    <textarea bind:value={markdown} rows="4" cols="50" />
    <br />
    <button on:click={submitMarkdown}>Submit</button>
</form>
