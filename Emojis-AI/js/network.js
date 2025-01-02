// import { data } from "./data.js";

console.log(brain);

export const net = new brain.recurrent.LSTM({
  hiddenLayers: [24, 24, 8],
  activation: 'sigmoid',
  learningRate: 0.1
});


