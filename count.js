const brain = require('brain.js');

const trainingData = [
  [10,9,8,7,6,5,4,3,2,1]
];

const network = new brain.recurrent.LSTMTimeStep();
network.train(trainingData, {
  iterations: 2000,
  log: (stats) => {
    console.log(stats)
  }
});

console.log(network.run([10,9,8,7,6]));