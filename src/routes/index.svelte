<script>
  import tourStore from "../store/tourStore.js";

  let tickets = []

  function buyTickets(date, location, theatre) {
    // tickets = [{date, location, theatre}, ...tickets]
    // alert(`
    //   ticket info:
    //   ${tickets.date}
    //   ${tickets.location}
    //   ${tickets.theatre}
    // `)
    alert(`
      Ticket information:
      date: ${date},
      location: ${location},
      theatre: ${theatre}
    `)
  }
</script>

<section class="content-section container animated fadeInUp">
  <h2 class="section-header">TOURS</h2>
  <div>
    {#each $tourStore as item}
      <div class="tour-row">
        <span class="tour-item tour-date">{item.date}</span>
        <span class="tour-item tour-city">{item.location}</span>
        <span class="tour-item tour-arena">{item.theatre}</span>
        <button type="button" class="tour-item tour-btn btn btn-primary" on:click={() => buyTickets(item.date, item.location, item.theatre)}>
          BUY TICKETS
        </button>
      </div>
    {/each}
  </div>
</section>
