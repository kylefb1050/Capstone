import axios from "axios";
import * as store from "../store/index";

export default function carStarting() {
  const issueRender = document.querySelector("#issueRoute");
  const issueList = event.target.elements;
  const carStarting =
    "Have you checked your battery? One of the easiest culprits to a car that refuses to start, trying using jumper cables to jump your car. If the issue persists, try checking the alternator using the voltage meter (no voltage means bad alternator). Usually, the dashboard gauge will flicker and this is the easiest way to tell if your battery is bad. If the car is turning over but not wanting to start, check your starter.";
  console.log("", issueList);

  issueRender.innerHTML = `<div class="starting">${carStarting}</div>
    `;
  const requestData = {};
  console.log("request Body", requestData);

  axios
    .get(`${process.env.RENDER}/Home`, requestData)
    .then(response => {
      store.Home.issues.push(response.data);
    })
    .catch(error => {
      console.log("Error", error);
    });
}
