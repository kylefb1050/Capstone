import axios from "axios";
import * as store from "../store/index";

export default function carSuspension() {
  const issueRender = document.querySelector("#issueRoute");
  const issueList = event.target.elements;
  const carSuspension =
    "The shocks or suspensions on a car is highly complicated piece of work. It is made up of strong pieces of metal built to hold the weight of the car, a spring to absorb the impact of the car when it bounces up and down, and bushings and bearings that help the shocks twist and turn without damage. These bushings or bearings(especially on older cars) can go bad as they are just pieces of rubber. Trying consulting with a mechanic or your dealer to see if this is your issue and look to get it replaced.";
  console.log("", issueList);

  issueRender.innerHTML = `<div class="suspension">${carSuspension}</div>
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
