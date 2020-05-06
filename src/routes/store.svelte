<script>
  import musicStore from "../store/musicStore.js";

  function addToCart(name) {
    alert(`${name} is added to cart`);
    
  }

  function purchase() {
    alert('thank you for purchasing our products !!!')
  }
</script>

<div class="body animated zoomIn">
  <section class="container content-section">
    <h2 class="section-header">MUSIC</h2>
    <div class="shop-items">
      {#each $musicStore.music as item}
        <div class="shop-item" data-item-id={item.id}>
          <span class="shop-item-title">{item.name}</span>
          <img
            class="shop-item-image"
            src="Images/{item.imgName}"
            alt="image" />
          <div class="shop-item-details">
            <span class="shop-item-price">{item.price / 100}</span>
            <button class="btn btn-primary shop-item-button" type="button" on:click={() => addToCart(item.name)}>
              ADD TO CART
            </button>
          </div>
        </div>
      {/each}
    </div>
  </section>
  <section class="container content-section">
    <h2 class="section-header">MERCH</h2>
    <div class="shop-items">
      {#each $musicStore.merch as item}
        <div class="shop-item" data-item-id={item.id}>
          <span class="shop-item-title">{item.name}</span>
          <img
            class="shop-item-image"
            src="Images/{item.imgName}"
            alt="image" />
          <div class="shop-item-details">
            <span class="shop-item-price">{item.price / 100}</span>
            <button class="btn btn-primary shop-item-button" type="button" on:click={() => addToCart(item.name)}>
              ADD TO CART
            </button>
          </div>
        </div>
      {/each}
    </div>
  </section>
  <section class="container content-section">
    <h2 class="section-header">CART</h2>
    <div class="cart-row">
      <span class="cart-item cart-header cart-column">ITEM</span>
      <span class="cart-price cart-header cart-column">PRICE</span>
      <span class="cart-quantity cart-header cart-column">QUANTITY</span>
    </div>
    <div class="cart-items" />
    <div class="cart-total">
      <strong class="cart-total-title">Total</strong>
      <span class="cart-total-price">$0</span>
    </div>
    <button class="btn btn-primary btn-purchase" type="button" on:click={purchase}>PURCHASE</button>
  </section>
</div>
