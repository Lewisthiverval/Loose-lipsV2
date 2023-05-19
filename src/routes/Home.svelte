<script lang="js" context="module">
  import Layout from "./Layout.svelte";
  // export async function load({ fetch }) {
  //   return {
  //     props: {
  //       blogs: await fetch("/blog.json").then((res) => res.json()),
  //       events: await fetch("/events.json").then((res) => res.json()),
  //       mixes: await fetch("/mixes.json").then((res) => res.json()),
  //     },
  //   };
  // }
</script>

<script lang="js">
  // import { tags } from "../lib/shared/tags";
  // import FeaturedContent from "../lib/shared/components/featured-content/FeaturedContent.svelte";
  // import TagsContainer from "../lib/shared/components/tags-container/TagsContainer.svelte";
  // import RecentPostsContainer from "../lib/shared/components/recent-posts-container/RecentPostsContainer.svelte";
  // import HomeEventsContainer from "../lib/shared/components/home-events-container/HomeEventsContainer.svelte";

  // export let blogs;
  // export let events;
  // const posts = [...blogs, ...events];

  // let searchValue = "";
  // $: filteredBlogPosts = blogs
  //   .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
  //   .filter((blog) =>
  //     blog.title.toLowerCase().includes(searchValue.toLowerCase())
  //   );
</script>

<div class="w-[100%] mt-28">
  <Layout>Loose lips 2.0</Layout>

  <!-- <TagsContainer {tags} />
  <FeaturedContent {posts} />
  <RecentPostsContainer {posts} /> -->
  <!-- <HomeEventsContainer {events} /> -->
</div>

<style>
  :global(body) {
    overflow-x: hidden;
  }
</style>
