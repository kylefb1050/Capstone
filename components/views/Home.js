import html from "html-literal";
import carIssue from "../../utils/script2";

export default state => html`
  <div class="overlay1">
    <div class="overlay">
      <div class="overlayText">
        <section id="jumbotron">
          <h1>Welcome to IntelliAuto!</h1>
          <!-- <h3>
            The condition in ${state.weather.city} is
            ${state.weather.description}. Temperature is ${state.weather.temp}F,
            and it feels like ${state.weather.feelsLike}F.
          </h3> -->
        </section>

        <div id="home-content">
          <h2 id="h2-1">What's wrong with you car?</h2>

          <form>
            <button onclick="carIssue()">Brakes</button>
          </form>

          <div id="issueRoute"></div>

          </div>
        </div>
      </div>
    </div>
  </div>
`;
