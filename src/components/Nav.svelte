<script>
  export let segment;

  let open = false;
  let fade = false;
  let fixedBar = false

  $: if (open) fixedBar = true
  $: if (!open) fixedBar = false

  function toggleMenu() {
    open = !open;
    fade = !fade;
  }
</script>

<header class="main-header">
  <nav class="nav main-nav">
    <div class="hamburger" on:click={toggleMenu} class:fixedBar>
      <div class="line" />
      <div class="line" />
      <div class="line" />
    </div>
    <ul class="nav-links" class:open>
      <li class:fade>
        <a
          aria-current={segment === undefined ? 'page' : undefined}
          href="."
          on:click={toggleMenu}>
          HOME
        </a>
      </li>
      <li class:fade>
        <a
          aria-current={segment === 'store' ? 'page' : undefined}
          href="store"
          on:click={toggleMenu}>
          STORE
        </a>
      </li>
      <li class:fade>
        <a
          aria-current={segment === 'about' ? 'page' : undefined}
          href="about"
          on:click={toggleMenu}>
          ABOUT
        </a>
      </li>
    </ul>
  </nav>
  <h1 class="band-name band-name-large">The Generics</h1>
  <div class="container">
    <div class="btn-wrap">
      <button type="button" class="btn btn-header">Get our Latest Album</button>
    </div>
  </div>
  <button type="button" class="btn btn-header btn-play">&#9658;</button>
</header>
