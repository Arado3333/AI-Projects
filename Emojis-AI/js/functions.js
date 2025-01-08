import { net } from "./network.js";
import { data, emojiMap } from "./data.js";
import { trainedNet } from "./trainedNetState.js";

export function handleSubmit(event) {
    event.preventDefault();

    let query = document.querySelector("#query").value;
    query = query.split(". ");

    isStateExist();
    predict(query);
}

export function isStateExist() {
    //pulling trained model from localStorage if exist

    const currentState = JSON.parse(localStorage.getItem("modelState")) || "";
    if (currentState != "") {
        console.log("Found previous training state.");
        net.fromJSON(currentState);
    } else {
        console.log("Loading trained net"); //loads from trainedNetState.js
        net.fromJSON(trainedNet);
    }
    
}

//Optional for training from scratch or retraining
function train()
{
    console.log("No previous training state. Training");

        //Recommended training session
        net.train(data, {
            iterations: 3000,
            learningRate: 0.001,
            errorThresh: 0.001,
            logPeriod: 100,
            log: (stats) => console.log(stats),
        });
        console.log(`Done training. Running test inputs.`);
}

export function predict(inputsArr) {
    inputsArr.forEach((input) => {
        const token = net.run(input); // Output will be a token like "E1"
        const emoji = emojiMap[token] || "❓"; // Map token to emoji or show a placeholder

        console.log(`Input: "${input}" → Emoji: "${emoji}"`);
        document.querySelector("#answer").innerHTML += emoji;
    });

    if (!localStorage.getItem('modelState'))
    {
        localStorage.setItem("modelState", JSON.stringify(net.toJSON()));
        console.log("net state saved to localStorage!");
    }
}
