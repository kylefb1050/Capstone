import axios from "axios";
import * as store from "../store/index";

export default function carMisfire() {
  const issueRender = document.querySelector("#issueRoute");
  const issueList = event.target.elements;
  const carMisfire =
    "If your car is sneezing or popping, you have a misfire! To fix this, locate the plug that sits atop your cylinder's spark plug and disconnect it. Next, take a spark plug socket and remove the spark plug. Here, you can determine the cause of the misfire by checking the state of the spark plug. Make sure to do this to every cylinder you have and replacing each spark plug with new ones.";
  console.log("", issueList);

  issueRender.innerHTML = `<div class="misfire">${carMisfire}</div>
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
