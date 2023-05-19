<script lang="js">
  // Start: Local Imports

  import NavigationBar from "../navigation-bar/NavigationBar.svelte";
  export let logoImage;
  export let title = "LOOSE LIPS";
  export let useTitleAndLogo;

  const navLinks = [
    {
      path: "/blog",
      label: "BLOG",
    },
    {
      path: "/crew",
      label: "CREW",
    },
    {
      path: "/events",
      label: "EVENTS",
    },
    {
      path: "/mixes",
      label: "MIXES",
    },
    {
      path: "/radio-shows",
      label: "RADIO",
    },
    {
      path: "/label",
      label: "LABEL",
    },
  ];
</script>

<div>
  <NavigationBar
    {navLinks}
    {logoImage}
    {title}
    {useTitleAndLogo}
    on:toggleTheme
  />
</div>
