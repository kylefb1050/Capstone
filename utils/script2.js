import axios from "axios";
import * as store from "../store/index";

export default function carIssue() {
  document.querySelector("form").addEventListener("brakes", event => {
    event.preventDefault();

    const issueRender = document.querySelector("#issueRoute");
    const issueList = event.target.elements;
    const carBrakes =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue neque gravida in fermentum et sollicitudin ac orci phasellus. Enim neque volutpat ac tincidunt vitae semper quis. Nunc sed velit dignissim sodales ut eu sem integer. Malesuada proin libero nunc consequat interdum. Et netus et malesuada fames ac turpis. Quisque non tellus orci ac auctor. Felis bibendum ut tristique et egestas quis ipsum suspendisse. Morbi tincidunt ornare massa eget egestas purus. Ut eu sem integer vitae. Et netus et malesuada fames ac turpis egestas. Vel pretium lectus quam id leo in vitae turpis. Nibh sit amet commodo nulla facilisi nullam vehicula ipsum a. Non tellus orci ac auctor augue mauris augue neque gravida. Nisl pretium fusce id velit ut. Sit amet mattis vulputate enim nulla aliquet. Proin nibh nisl condimentum id venenatis a condimentum. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Volutpat commodo sed egestas egestas fringilla. Velit dignissim sodales ut eu sem integer vitae justo.";
    console.log("", issueList);

    issueRender.innerHTML = `<div class="brakes1">${issueList.carBrakes ===
      carBrakes}</div>
    `;
    const requestData = {
      brake: issueList.carBrakes
    };
    console.log("request Body", requestData);

    axios
      .get(`${process.env.RENDER}/Home`, requestData)
      .then(response => {
        store.Home.issues.push(response.data);
      })
      .catch(error => {
        console.log("Error", error);
      });
  });
}
