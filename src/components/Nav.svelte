<script>
  export let segment;

  let open = false;
  let fade = false;
  let fixedBar = false;

  $: if (open) fixedBar = true;
  $: if (!open) fixedBar = false;

  function toggleMenu() {
    open = !open;
    fade = !fade;
  }
</script>

<style>
  nav {
    height: 10vh;
  }
  .nav-links {
    display: flex;
    list-style: none;
    width: 50%;
    height: 100%;
    justify-content: space-around;
    align-items: center;
    margin: auto;
  }
  .main-nav {
    text-align: center;
    font-size: 1.1em;
    font-weight: lighter;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    display: flex;
    justify-content: center;
  }

  .main-nav li {
    padding: 0 5%;
  }
  .btn-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 575px) {
    .line {
      width: 30px;
      height: 3px;
      background: white;
      margin: 5px;
    }
    nav {
      position: relative;
    }
    .hamburger {
      position: absolute;
      cursor: pointer;
      right: 5%;
      top: 50%;
      transform: translate(-5%, -50%);
      z-index: 15;
    }
    .nav-links {
      position: fixed;
      background: #56ccf2;
      height: 100vh;
      width: 100%;
      flex-direction: column;
      clip-path: circle(100px at 90% -25%);
      -webkit-clip-path: circle(100px at 90% -25%);
      transition: all 0.5s ease-out;
      pointer-events: none;
      z-index: 20;
    }
    /* .nav-links li,
    .nav-links a {
       display: block;
       border: 1px solid white;
       margin: 0;
     } */
    .fixedBar {
      position: fixed;
      right: 5%;
      top: 5%;
    }
    .nav-links.open {
      clip-path: circle(1000px at 90% -25%);
      -webkit-clip-path: circle(1000px at 90% -25%);
      pointer-events: all;
      z-index: 5;
    }
    .nav-links li {
      opacity: 0;
    }
    .nav-links li a {
      font-size: 25px;
    }
    .nav-links li:nth-child(1) {
      transition: all 0.5s ease 0.1s;
    }
    .nav-links li:nth-child(2) {
      transition: all 0.5s ease 0.2s;
    }
    .nav-links li:nth-child(3) {
      transition: all 0.5s ease 0.3s;
    }
    li.fade {
      opacity: 1;
    }
    .band-name {
      font-size: 80px;
      /* border: 1px solid white; */
    }
    .btn-header {
      font-size: 20px;
    }
  }
</style>

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
