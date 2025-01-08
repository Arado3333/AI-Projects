export const net = new brain.recurrent.LSTM({
  hiddenLayers: [15, 15, 5],
  activation: "sigmoid",
  dropout: 0.1
});


