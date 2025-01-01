import { data } from "./data.js";
import fs from "node:fs/promises";

console.log(brain);

let network = new brain.recurrent.LSTM({
  inputSize: 1,
  outputSize: 1,
  hiddenLayers: [4, 8, 8],
});

network.train(data, {
    iterations: 20000,
    errorThresh: 0.003,
    logPeriod: 100,
    log: (stats) => console.log(stats)
});

fs.writeFileSync('trained-net.js', `export default ${ network.toFunction().toString() };`);

const answer = network.run("world war");

document.querySelector("#answer").innerHTML = answer;
document.querySelector("#app").innerHTML = brain.utilities.toSVG(network);
