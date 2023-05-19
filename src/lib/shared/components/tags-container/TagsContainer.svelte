<script lang="ts">
  export let tags;
</script>

<div class="flex flex-row flex-wrap w-full mt-4 items-center">
  {#each tags.generalTags as tag, index (tag)}
    <a
      data-sveltekit:prefetch
      aria-label={tag}
      class="text-sm font-bold text-black-400 text-black dark:text-white hover:text-white dark:hover:text-whiste"
    >
      {tag.toUpperCase()}
    </a>
    {#if index !== tags.length - 1}
      <p class="mr-2 ml-1 text-black dark:text-white p-2 text-align:center" />
    {/if}
  {/each}
</div>
