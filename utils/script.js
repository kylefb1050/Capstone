import axios from "axios";
import * as store from "../store/index";

export default function carModel() {
  document.querySelector("form").addEventListener("submit", event => {
    event.preventDefault();

    const carRender = document.querySelector("#carRoute");
    const modelList = event.target.elements;
    const hondaEngine =
      "The Honda Civic is back—recapturing its position as a mature, substantial economy car with enough elegant touches that make you feel like you spent more money than you did. We tested two versions of the 2016 Honda Civic: the base LX with a new 2.0-liter four-cylinder rated at 158 hp, and the EX-T with the uplevel 1.5-liter, 174-hp turbocharged four-cylinder (the first turbo Honda has offered in the U.S.). Automatic Civics come with a continuously variable transmission (CVT), which uses belts and pulleys rather than mechanical cogs. If you prefer to row your own gears, the 2016 Honda Civic LX model offers a six-speed manual.";
    const toyotaEngine =
      " 1.8 Liter 4 Cylinder with 26/34 miles to the gallon. The 10th-generation Toyota Corolla's facelift was a mild one as there were no structural or mechanical changes made to the range. Some of the trims were revised, and cosmetic alterations were kept to a minimum. With the arrival of the facelift, Toyota also introduced the L as a new base trim together with a special-edition package for the LE and S models. The 10th-generation Toyota Corolla sedan range does not boast class-leading crash-test results from the NHTSA with its four-star overall safety rating. In the front and rollover sections, it is awarded four stars, but the side crash test is a bit more impressive with its five-star result. All Toyota Corolla trims come standard with daytime running lights, intermittent windshield wipers, front and side airbags for the driver and passenger, ABS with electronic brake-force distribution and brake assist, tire-pressure monitoring, and side-impact door beams. An anti-theft system with an engine immobilizer is also fitted across the range. Traction and stability control are optional on all models except the XRS on which it is included as standard for 2009 only. Thereon after, it is standard across the 2010 range. Variable intermittent windshield wipers are installed to the XLE only. Curtain airbags are optionally available on all models assembled in 2012 and 2013. ";
    console.log("", modelList);

    carRender.innerHTML = `<div class="year">${
      //   modelList.year.value
      // }</div><div>${modelList.make.value}</div><div>${modelList.model.value}</div>
      // <div class="engine">${
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
