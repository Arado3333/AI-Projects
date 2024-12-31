import { data } from "./data.js";

console.log(brain);

const network = new brain.recurrent.LSTM(
    {
        inputSize: 1,
        outputSize: 1,
        hiddenLayers: [4, 8, 8]
    }
);

network.train(data, {
    iterations: 20000,
    errorThresh: 0.003,
    logPeriod: 100,
    log: (stats) => console.log(stats)
});


const answer = network.run("spell check");

document.querySelector('#answer').innerHTML = answer;
document.querySelector('#app').innerHTML = brain.utilities.toSVG(network);