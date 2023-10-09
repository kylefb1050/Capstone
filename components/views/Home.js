import html from "html-literal";

export default state => html`
  <section id="jumbotron">
    <h1>Welcome to IntelliAuto!</h1>
    <p>
      Use this application to understand and develop self knowledge about your
      vehicle.
    </p>
    <img
    src=https://files.porsche.com/filestore/image/multimedia/none/992-s-t-modelexplorer/normal/3b95cec4-217d-11ee-8103-005056bbdc38;sS;twebp065/porsche-normal.webp>
  </section>

  <div id="home-content">
    <p>Destinations are from A to B. Let's get you out of C.</p>
    <h2>What's wrong with you car?</h2>
    <form id="form">
      <input type="search" id="query" name="q" placeholder="Search..." />
      <button>Search</button>
    </form>
  </div>

  <div id="about-button">
    <a href="About" data-navigo>About us</a>
  </div>

  <div id="list-button">
    <a href="List" data-navigo>Buy Parts</a>
  </div>

  <div id="models-button">
    <a href="Models" data-navigo>Models</a>
  </div>
`;
