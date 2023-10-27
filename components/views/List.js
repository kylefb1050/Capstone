import html from "html-literal";

export default state => html`
  <section id="parts1">
    <h1>Need Parts?</h1>
    <p id="pm">Preventative Maintenance</p>
    <button class="brakes" role="button">Brakes</button>
    <button class="Oil" role="button">Oil</button>
    <button class="Coolant" role="button">Coolant</button>
    <button class="Battery" role="button">Batteries</button>
    <button class="Spark" role="button">Spark Plugs</button>
  </section>
`;
