<script>
  import { TabContent, TabPane } from "sveltestrap";
  import SQLite from "tauri-plugin-sqlite-api";
  import HanziCard from "$lib/components/HanziCard.svelte";
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
<!--Tabs navigation-->
<!-- <ul
  class="mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0"
  role="tablist"
  data-te-nav-ref
>
  <li role="presentation">
    <a
      href="#tabs-home"
      class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
      data-te-toggle="pill"
      data-te-target="#tabs-home"
      data-te-nav-active
      role="tab"
      aria-controls="tabs-home"
      aria-selected="true">Home</a
    >
  </li>
  <li role="presentation">
    <a
      href="#tabs-profile"
      class="focus:border-transparen my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
      data-te-toggle="pill"
      data-te-target="#tabs-profile"
      role="tab"
      aria-controls="tabs-profile"
      aria-selected="false">Profile</a
    >
  </li>
  <li role="presentation">
    <a
      href="#tabs-messages"
      class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
      data-te-toggle="pill"
      data-te-target="#tabs-messages"
      role="tab"
      aria-controls="tabs-messages"
      aria-selected="false">Messages</a
    >
  </li>
  <li role="presentation">
    <a
      href="#tabs-contact"
      class="disabled pointer-events-none my-2 block border-x-0 border-b-2 border-t-0 border-transparent bg-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-400 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent dark:text-neutral-600"
      data-te-toggle="pill"
      data-te-target="#tabs-contact"
      role="tab"
      aria-controls="tabs-contact"
      aria-selected="false">Contact</a
    >
  </li>
</ul>
<div class="mb-6">
  <div
    class="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
    id="tabs-home"
    role="tabpanel"
    aria-labelledby="tabs-home-tab"
    data-te-tab-active
  >
    Tab 1 content
  </div>
  <div
    class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
    id="tabs-profile"
    role="tabpanel"
    aria-labelledby="tabs-profile-tab"
  >
    Tab 2 content
  </div>
  <div
    class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
    id="tabs-messages"
    role="tabpanel"
    aria-labelledby="tabs-profile-tab"
  >
    Tab 3 content
  </div>
  <div
    class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
    id="tabs-contact"
    role="tabpanel"
    aria-labelledby="tabs-contact-tab"
  >
    Tab 4 content
  </div>
</div>
-->

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
