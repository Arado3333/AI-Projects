import { data } from "./data.js";

debugger;
console.log(brain);

let network = new brain.recurrent.LSTM({
  inputSize: 1,
  outputSize: 1,
});

network.train(data, {
  iterations: 1000,
  errorThresh: 0.010,
  logPeriod: 100,
  log: (stats) => console.log(stats),
});

export const networkState = network.toJSON();
localStorage.setItem("trainedModel", JSON.stringify(networkState));

// console.log(JSON.stringify(networkState));
