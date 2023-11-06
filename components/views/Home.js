import html from "html-literal";
import carIssue from "../../utils/script2";
import carStarting from "../../utils/script3";
import carSuspension from "../../utils/script4";
import carMisfire from "../../utils/script5";
window.carIssue = carIssue;
window.carStarting = carStarting;
window.carSuspension = carSuspension;
window.carMisfire = carMisfire;

export default state => html`
  <div class="overlay1">
    <div class="overlay">
      <div class="overlayText">

        <section id="jumbotron">
          <h1>Welcome to IntelliAuto!</h1>
        </section>

        <div id="home-content">
          <h2 id="h2-1">What's wrong with you car?</h2>

            <button id="brakes1" role="button" onclick="carIssue()">Brakes</button>

            <button id="starting" role="button" onclick="carStarting()">My car isn't starting</button>

            <button id="suspension" role="button" onclick="carSuspension()">Creaking, thudding when driving</button>

            <button id="misfire" role="button" onclick="carMisfire()">Exhaust will pop and sneeze</button>

            <div id="issueRoute"></div>

          </div>
        </div>
      </div>
    </div>
  </div>
`;
