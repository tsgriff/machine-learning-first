const brain = require('brain.js');
const emailData = require('./email-data.json');

const network = new brain.recurrent.LSTM();

const trainingData = emailData.map(email => ({
  input: email.subject,
  output: email.type
}))

network.train(trainingData, {
  iterations: 2000,
  log: (stats) => {
    console.log(stats)
  }
});

// const queryString = "You're eligible for 50% off"

// console.log(network.run(queryString));