import { net } from "./network.js";
import { handleSubmit } from "./functions.js";

document.querySelector("#input").addEventListener("submit", handleSubmit);

document.querySelector("#app").innerHTML = brain.utilities.toSVG(net);
