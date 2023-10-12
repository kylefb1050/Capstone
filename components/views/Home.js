import html from "html-literal";

export default state => html`
  <div class="overlay1">
    <div class="overlay">
      <div class="overlayText">
        <section id="jumbotron">
          <h1>Welcome to IntelliAuto!</h1>
          <h3>
            The condition in ${state.weather.city} is
            ${state.weather.description}. Temperature is ${state.weather.temp}F,
            and it feels like ${state.weather.feelsLike}F.
          </h3>
          <p>
            Use this application to understand and develop self knowledge about
            vehicle... or fix it.
          </p>
          <img
          src=https://files.porsche.com/filestore/image/multimedia/none/992-s-t-modelexplorer/normal/3b95cec4-217d-11ee-8103-005056bbdc38;sS;twebp065/porsche-normal.webp>
        </section>

        <div id="home-content">
          <h2>What's wrong with you car?</h2>
          <form id="form">
            <input type="search" id="query" name="q" placeholder="Search..." />
            <button>Search</button>
          </form>
        </div>
      </div>
    </div>
  </div>
`;
