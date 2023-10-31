import html from "html-literal";

export default state => html`
  <h1 id="vehicle1">
    Please select your vehicle.
  </h1>

  <section id="select">
    <form id="carForm">
      <label for="year">Year:</label>
      <select id="year" name="year" required>
        <option value="2010">2010</option>
        <option value="2016">2016</option>
        <!-- Add more year options as needed --> </select
      ><br /><br />

      <label for="make">Make:</label>
      <select id="make" name="make" required>
        <option value="toyota">Toyota</option>
        <option value="honda">Honda</option>
        <!-- Add more make options as needed --> </select
      ><br /><br />

      <label for="model">Model:</label>
      <select id="model" name="model" required>
        <option value="corolla">Corolla</option>
        <option value="civic">Civic</option>
        <!-- Add more model options as needed --> </select
      ><br /><br />

      <input type="submit" value="Submit" />
    </form>

    <div id="carRoute"></div>

    ${state.Models.map(car => {
      return html`
        <ul>
          <ul>
            ${car.year}, ${car.make}, {car.model}
          </ul>
        </ul>
      `;
    })}
  </section>
`;
