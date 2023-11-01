import axios from "axios";
import * as store from "../store/index";

export default function carModel() {
  document.querySelector("form").addEventListener("submit", event => {
    event.preventDefault();

    const carRender = document.querySelector("#carRoute");
    const modelList = event.target.elements;
    const hondaEngine =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue neque gravida in fermentum et sollicitudin ac orci phasellus. Enim neque volutpat ac tincidunt vitae semper quis. Nunc sed velit dignissim sodales ut eu sem integer. Malesuada proin libero nunc consequat interdum. Et netus et malesuada fames ac turpis. Quisque non tellus orci ac auctor. Felis bibendum ut tristique et egestas quis ipsum suspendisse. Morbi tincidunt ornare massa eget egestas purus. Ut eu sem integer vitae. Et netus et malesuada fames ac turpis egestas. Vel pretium lectus quam id leo in vitae turpis. Nibh sit amet commodo nulla facilisi nullam vehicula ipsum a. Non tellus orci ac auctor augue mauris augue neque gravida. Nisl pretium fusce id velit ut. Sit amet mattis vulputate enim nulla aliquet. Proin nibh nisl condimentum id venenatis a condimentum. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Volutpat commodo sed egestas egestas fringilla. Velit dignissim sodales ut eu sem integer vitae justo.";
    const toyotaEngine =
      "Elementum sagittis vitae et leo duis ut diam quam nulla. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Ornare arcu odio ut sem nulla pharetra diam sit amet. Amet venenatis urna cursus eget nunc. Eu feugiat pretium nibh ipsum consequat. Sit amet consectetur adipiscing elit ut aliquam purus. Eu facilisis sed odio morbi. In aliquam sem fringilla ut morbi tincidunt. Pharetra et ultrices neque ornare aenean euismod. Ut eu sem integer vitae. Etiam sit amet nisl purus in mollis nunc sed id. Dictumst quisque sagittis purus sit amet. A lacus vestibulum sed arcu non. Elementum tempus egestas sed sed risus pretium quam.";
    console.log("", modelList);

    carRender.innerHTML = `<div class="year">${
      modelList.year.value
    }</div><div>${modelList.make.value}</div><div>${modelList.model.value}</div>
    <div class="engine">${
      modelList.make.value === "toyota" ? toyotaEngine : hondaEngine
    }</div>`;
    const requestData = {
      year: modelList.year.value,
      make: modelList.make.value,
      model: modelList.model.value
    };
    console.log("request Body", requestData);

    axios
      .get(`${process.env.RENDER}/Cars`, requestData)
      .then(response => {
        store.Model.Models.push(response.data);
      })
      .catch(error => {
        console.log("Error", error);
      });
  });
}
