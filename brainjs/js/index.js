import { data } from "./data.js";

console.log(brain);

const network = new brain.recurrent.LSTM(
    {
        inputSize: 1,
        outputSize: 1,
        hiddenLayers: [4,4]
    }
);

network.train(data, {
    iterations: 13000,
    errorThresh: 0.05,
    logPeriod: 50,
    log: (stats) => console.log(stats)
});


const answer = network.run("world war");

document.querySelector('#answer').innerHTML = answer;
document.querySelector('#app').innerHTML = brain.utilities.toSVG(network);