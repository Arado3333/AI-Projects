import { networkState } from "./trainedNet.js";

// const answer = network.run("world war");

// document.querySelector("#answer").innerHTML = answer;
// document.querySelector("#app").innerHTML = brain.utilities.toSVG(network);


//creating new brain with the saved data
let net = new brain.recurrent.LSTM();
net.fromJSON(networkState).toString();

const answer = net.run("solve");

document.querySelector("#answer").innerHTML = answer;
document.querySelector("#app").innerHTML = brain.utilities.toSVG(net);