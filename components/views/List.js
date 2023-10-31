import html from "html-literal";

export default state => html`
  <section id="parts1">
    <h1>Need Parts?</h1>

    <p id="pm">Preventative Maintenance</p>
    <a
      href="https://www.autozone.com/brakes-and-traction-control/brake-pads"
      class="Brakes"
      >Brakes</a
    >
    <a
      href="https://www.autozone.com/motor-oil-and-transmission-fluid/engine-oil"
      class="oil"
      >Oil</a
    >
    <a
      href="https://www.autozone.com/antifreeze-radiator-additives-and-windshield-wash-fluid/antifreeze-coolant"
      class="coolant"
      >Coolant</a
    >
    <a
      href="https://www.autozone.com/batteries-starting-and-charging/battery"
      class="battery"
      >Batteries</a
    >
    <a
      href="https://www.autozone.com/batteries-starting-and-charging/battery"
      class="spark"
      >Spark Plugs</a
    >
    <h5>These parts are sourced by Autozone.com</h5>
  </section>
`;
