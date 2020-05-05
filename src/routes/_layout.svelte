<script>
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";

  export let segment;
</script>

<style>
  main {
    margin: 2rem 0;
  }
</style>

<Nav {segment} />
<main>
  <slot />
</main>
<Footer />
