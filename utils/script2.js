import axios from "axios";
import * as store from "../store/index";

export default function carIssue() {
  const issueRender = document.querySelector("#issueRoute");
  const issueList = event.target.elements;
  const carBrakes =
    "Brakes are a preventative maintenance as it is a degrading part of your vehicle. If brakes are not working there are multiple ways to find the issue. You can check the wear of the brake pads or the brake rotors. Always check the brake fluid reservoir or the brake master cylinder if it is working or not.";
  console.log("", issueList);

  issueRender.innerHTML = `<div class="brakes1">${carBrakes}</div>
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
