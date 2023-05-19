<script lang="ts" context="module">
  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ fetch }) {
    return {
      props: {
        blogs: await fetch(`/blog.json?recent=${5}`).then((res) => res.json()),
      },
    };
  }
</script>

<script lang="ts">
  import RecentPost from "../recent-post/RecentPost.svelte";
  export let posts;


  const mostRecentPosts = posts
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
    .slice(0, 20);
</script>

<div class="flex flex-col items-start mb-16">
  <h2
    class="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white m-4"
  >
    Recent Posts
  </h2>
  <div
    class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 justify-between gap-5"
  >
    {#each mostRecentPosts as post}
      <div>
        <RecentPost {post} />
      </div>
    {/each}
  </div>
</div>
