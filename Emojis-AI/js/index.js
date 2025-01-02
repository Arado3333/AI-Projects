import { net } from "./network.js";
import { data } from "./data.js";

function handleSubmit(event) {
    event.preventDefault();
    const query = document.querySelector("#query").value;

    //pulling trained model from localStorage if exist
    const currentState = JSON.parse(localStorage.getItem("modelState")) || "";
    if (currentState != "") {
        console.log("Found previous training state.");
        net.fromJSON(currentState);
    }

    net.train(data, {
        iterations: 2000,
        errorThresh: 0.005,
        logPeriod: 50,
        log: (stats) => console.log(stats),
    });

    const answer = net.run([query]);
    document.querySelector("#answer").innerHTML = answer;

    localStorage.setItem("modelState", JSON.stringify(net.toJSON()));

    debugger;
    retrainNet();
    //after training twice
    const answer2 = net.run([query]);
    document.querySelector("#answer").innerHTML = answer2;
}

//retrain the network based on saved state

function retrainNet() {
    console.log("training second time: 2000 iterations");
    const info = JSON.parse(localStorage.getItem("modelState"));
    net.fromJSON(info);
    console.log(info);

    net.train(data, {
        iterations: 2000,
        errorThresh: 0.004,
        logPeriod: 50,
        log: (stats) => console.log(stats),
    });
    localStorage.setItem("modelState", JSON.stringify(net.toJSON()));
}

document.querySelector("#input").addEventListener("submit", handleSubmit);

document.querySelector("#app").innerHTML = brain.utilities.toSVG(net);
